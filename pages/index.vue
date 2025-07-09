<script setup lang="ts">
// Redirect from / to /home
await navigateTo('/home', { redirectCode: 301 });
</script>

<template>
  <div>Redirecting...</div>
</template>