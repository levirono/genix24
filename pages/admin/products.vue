<template>
  <div class="space-y-6">
    <h2 class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-emerald-500">
      Products Management
    </h2>

    <!-- Add Product Form -->
    <div class="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
      <h3 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Add New Product</h3>
      <form @submit.prevent="addProduct" class="space-y-4">
        <!-- Success Message -->
        <div v-if="successMessage" class="p-3 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 rounded">
          {{ successMessage }}
        </div>

        <!-- Error Message -->
        <div v-if="errorMsg" class="p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 rounded">
          {{ errorMsg }}
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Title -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Product Title *
            </label>
            <input
              v-model="newProduct.title"
              type="text"
              placeholder="Product name"
              required
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <!-- Category -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Category *
            </label>
            <input
              v-model="newProduct.category"
              type="text"
              placeholder="e.g., Software, Service"
              required
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <!-- Link -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Product Link
            </label>
            <input
              v-model="newProduct.link"
              type="url"
              placeholder="https://example.com"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <!-- Tint/Color -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Color Tint
            </label>
            <select
              v-model="newProduct.tint"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a color</option>
              <option value="from-blue-500 to-blue-600">Blue</option>
              <option value="from-emerald-500 to-emerald-600">Emerald</option>
              <option value="from-orange-500 to-orange-600">Orange</option>
              <option value="from-purple-500 to-purple-600">Purple</option>
              <option value="from-pink-500 to-pink-600">Pink</option>
              <option value="from-indigo-500 to-indigo-600">Indigo</option>
            </select>
          </div>
        </div>

        <!-- Description -->
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Description
          </label>
          <textarea
            v-model="newProduct.description"
            placeholder="Product description"
            rows="3"
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <!-- Highlights -->
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Highlights (comma-separated)
          </label>
          <input
            v-model="newProduct.highlights"
            type="text"
            placeholder="Feature 1, Feature 2, Feature 3"
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          :disabled="isLoading"
          class="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg disabled:bg-blue-300 disabled:cursor-not-allowed transition-colors"
        >
          {{ isLoading ? 'Adding Product...' : 'Add Product' }}
        </button>
      </form>
    </div>

    <!-- Products List -->
    <div>
      <h3 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white">All Products</h3>
      
      <div v-if="loadingProducts" class="text-center py-10">
        <p class="text-gray-500 dark:text-gray-400">Loading products...</p>
      </div>

      <div v-else-if="products.length === 0" class="text-center py-10">
        <p class="text-gray-500 dark:text-gray-400">No products yet. Add one to get started!</p>
      </div>

      <div v-else class="overflow-x-auto">
        <table class="w-full bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
          <thead>
            <tr class="bg-blue-50 dark:bg-gray-700">
              <th class="px-4 py-3 text-left font-semibold text-gray-900 dark:text-gray-200">Title</th>
              <th class="px-4 py-3 text-left font-semibold text-gray-900 dark:text-gray-200">Category</th>
              <th class="px-4 py-3 text-left font-semibold text-gray-900 dark:text-gray-200">Description</th>
              <th class="px-4 py-3 text-left font-semibold text-gray-900 dark:text-gray-200">Created</th>
              <th class="px-4 py-3 text-left font-semibold text-gray-900 dark:text-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="product in products"
              :key="product.id"
              class="border-b border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
            >
              <td class="px-4 py-3 text-gray-900 dark:text-gray-200 font-medium">{{ product.title }}</td>
              <td class="px-4 py-3 text-gray-700 dark:text-gray-300">
                <span class="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded text-sm">
                  {{ product.category }}
                </span>
              </td>
              <td class="px-4 py-3 text-gray-700 dark:text-gray-300 line-clamp-2">
                {{ product.description || 'N/A' }}
              </td>
              <td class="px-4 py-3 text-gray-600 dark:text-gray-400 text-sm">
                {{ formatDate(product.created_at) }}
              </td>
              <td class="px-4 py-3">
                <div class="flex gap-2">
                  <a
                    v-if="product.link"
                    :href="product.link"
                    target="_blank"
                    class="px-2 py-1 bg-emerald-500 hover:bg-emerald-600 text-white rounded text-sm transition-colors"
                  >
                    View
                  </a>
                  <button
                    @click="deleteProduct(product.id)"
                    class="px-2 py-1 bg-red-500 hover:bg-red-600 text-white rounded text-sm transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const newProduct = ref({
  title: '',
  category: '',
  description: '',
  highlights: '',
  link: '',
  tint: ''
})

const products = ref<any[]>([])
const isLoading = ref(false)
const loadingProducts = ref(true)
const errorMsg = ref('')
const successMessage = ref('')

const { user, fetchUserProfile } = useAuth()

// Fetch all products
const fetchProducts = async () => {
  loadingProducts.value = true
  try {
    const data = await $fetch('/api/products', {
      method: 'GET'
    })
    products.value = data.products || []
  } catch (error) {
    console.error('Failed to load products:', error)
  } finally {
    loadingProducts.value = false
  }
}

// Add new product
const addProduct = async () => {
  errorMsg.value = ''
  successMessage.value = ''

  if (!newProduct.value.title || !newProduct.value.category) {
    errorMsg.value = 'Title and Category are required'
    return
  }

  isLoading.value = true
  try {
    // Ensure user profile is loaded
    if (!user.value?.role) {
      await fetchUserProfile()
    }

    const session = localStorage.getItem('session')
    if (!session) {
      errorMsg.value = 'Not authenticated. Please login again.'
      return
    }

    const sessionData = JSON.parse(session)

    // Convert highlights string to array
    const highlights = newProduct.value.highlights
      ? newProduct.value.highlights.split(',').map(h => h.trim())
      : []

    const response = await $fetch('/api/products', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${sessionData.access_token}`
      },
      body: {
        title: newProduct.value.title,
        category: newProduct.value.category,
        description: newProduct.value.description,
        highlights: highlights,
        link: newProduct.value.link,
        tint: newProduct.value.tint
      }
    })

    if (response?.error) {
      errorMsg.value = response.error
    } else {
      successMessage.value = 'Product added successfully!'
      // Reset form
      newProduct.value = {
        title: '',
        category: '',
        description: '',
        highlights: '',
        link: '',
        tint: ''
      }
      // Refresh products list
      await fetchProducts()
      // Clear success message after 3 seconds
      setTimeout(() => {
        successMessage.value = ''
      }, 3000)
    }
  } catch (error: any) {
    errorMsg.value = error.data?.error || error.message || 'Failed to add product'
    console.error('Add product error:', error)
  } finally {
    isLoading.value = false
  }
}

// Delete product
const deleteProduct = async (productId: string) => {
  if (!confirm('Are you sure you want to delete this product?')) {
    return
  }

  try {
    const session = localStorage.getItem('session')
    if (!session) {
      errorMsg.value = 'Not authenticated'
      return
    }

    const sessionData = JSON.parse(session)

    const response = await $fetch(`/api/products/${productId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${sessionData.access_token}`
      }
    })

    if (response?.error) {
      errorMsg.value = response.error
    } else {
      successMessage.value = 'Product deleted successfully'
      await fetchProducts()
      setTimeout(() => {
        successMessage.value = ''
      }, 3000)
    }
  } catch (error: any) {
    errorMsg.value = error.data?.error || error.message || 'Failed to delete product'
    console.error('Delete error:', error)
  }
}

// Format date
const formatDate = (dateStr: string) => {
  return new Date(dateStr).toLocaleDateString()
}

onMounted(() => {
  fetchProducts()
})
</script>
