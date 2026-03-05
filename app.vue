<template>
  <div>
    <NuxtRouteAnnouncer/>
    <LandingHeader />
    <NuxtPage />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

// Initialize auth on app load
const { initUser } = useAuth()

onMounted(() => {
  initUser()
})
</script>
