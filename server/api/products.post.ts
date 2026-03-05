import { getSupabase, handleDatabaseError } from '../utils/supabase';

export default defineEventHandler(async (event) => {
  if (event.req.method !== 'POST') {
    return { error: 'Method not allowed' };
  }

  const authHeader = event.req.headers.authorization;
  if (!authHeader) {
    return { error: 'Unauthorized' };
  }

  const token = authHeader.replace('Bearer ', '');
  const supabase = getSupabase();
  const { data: { user }, error: authError } = await supabase.auth.getUser(token);
  if (authError || !user) {
    return { error: 'Unauthorized' };
  }

  const body = await readBody(event);
  const { title, category, description, highlights, link, tint } = body;

  try {
    const { data, error } = await supabase.from('products').insert([{
      user_id: user.id,
      title,
      category,
      description,
      highlights,
      link,
      tint
    }]).select();
    if (error) return { error: error.message };
    return { product: data[0] };
  } catch (error) {
    handleDatabaseError(error);
  }
});