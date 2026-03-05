CREATE TABLE IF NOT EXISTS public.products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT NOT NULL,
  highlights TEXT[] NOT NULL,
  link TEXT,
  tint TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Anyone can view products" ON public.products;
DROP POLICY IF EXISTS "Users can insert their own products" ON public.products;
DROP POLICY IF EXISTS "Users can update their own products" ON public.products;
DROP POLICY IF EXISTS "Users can delete their own products" ON public.products;
DROP POLICY IF EXISTS "Admins can manage all products" ON public.products;

CREATE POLICY "Anyone can view products" ON public.products
  FOR SELECT USING (true);

CREATE POLICY "Users can insert their own products" ON public.products
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own products" ON public.products
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own products" ON public.products
  FOR DELETE USING (auth.uid() = user_id);

CREATE POLICY "Admins can manage all products" ON public.products
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.users
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc'::text, NOW());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS handle_updated_at_products ON public.products;
CREATE TRIGGER handle_updated_at_products
  BEFORE UPDATE ON public.products
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();
-- ('your-admin-auth-id', 'FuelFinder', 'Mobility', 'Helps drivers and fleet operators discover nearby fuel stations, availability, and pricing in real time.', ARRAY['Location‑aware station search with filters', 'Availability and pricing signals sourced from the network', 'Integration points for fleet dashboards or consumer apps'], '/products/fuelfinder', 'from-brand-orange/25 via-brand-orange/5 to-transparent'),
-- ('your-admin-auth-id', 'One Workspace', 'Operations', 'A unified workspace for tracking inventory, approvals, and processes without spreadsheet sprawl.', ARRAY['Configurable data models and views tailored to teams', 'Role‑based access, audit trails, and activity feeds', 'Responsive experience across web and mobile devices'], '/products/one-workspace', 'from-brand-green/25 via-brand-green/5 to-transparent'),
-- ('your-admin-auth-id', 'Genixl Labs', 'Experimentation', 'Our internal lab for testing new UI patterns, frameworks, and automation before bringing them into client work.', ARRAY['Performance benchmarking sandboxes and testbeds', 'Starter kits and templates for common product types', 'Continuously updated best‑practice stacks for web, mobile, and cloud'], 'https://gr-genixls-projects.vercel.app/', 'from-brand-blue/25 via-brand-blue/5 to-transparent');
