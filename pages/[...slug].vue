<script setup lang="ts">
import Navbar from '~/components/navbar.vue';
import Footer from '~/components/footer.vue';
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <div class="flex-grow flex items-center justify-center">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-red-500 mb-4">404 - Page Not Found</h1>
        <p class="text-slate-400 mb-8">Sorry, the page you are looking for does not exist.</p>
        <NuxtLink to="/blogs" class="text-blue-400 hover:underline">Go back to Blog</NuxtLink>
      </div>
    </div>
    <Footer />
  </div>
</template>