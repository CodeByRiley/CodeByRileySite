<script setup lang="ts">
import Navbar from '~/components/navbar.vue';
import Footer from '~/components/footer.vue';

const { data: posts, pending, error } = await useAsyncData('blog-posts', () =>
  queryCollection('blog')
    .where('path', 'LIKE', '/blog/%')
    .all()
);
const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <div class="py-1" />
    <div class="flex-grow flex flex-col">
      <div class="py-2 text-center rounded mx-4 md:mx-[30.5em]">
        <h1 class="text-xl font-medium flex-wrap">Blog Posts</h1>
        <p class="text-slate-400 mt-2">Thoughts, tutorials, and updates from my coding journey</p>
      </div>
      <div class="py-1"></div>
      <div class="w-full max-w-4xl mx-auto p-4">
        <div v-if="pending" class="text-center py-8 text-slate-300">Loading blog posts...</div>
        <div v-else-if="error" class="text-center py-8 text-red-400">Error loading blog posts: {{ error.message }}</div>
        <div v-else-if="!posts || posts.length === 0" class="text-center py-8 text-slate-300">No blog posts yet. Check back soon!</div>
        <div v-else class="space-y-6">
          <article v-for="post in posts" :key="post.path"
            class="transform transition-transform duration-300 hover:scale-[1.02]">
            <NuxtLink :to="`/blogs/${post.path?.split('/').pop()}`" class="block">
              <div class="bg-white rounded-lg shadow border border-neutral-700 dark:bg-neutral-800 p-6 hover:bg-neutral-700 dark:hover:bg-neutral-700 transition-all duration-300">
                <div class="flex justify-between items-start mb-3">
                  <h2 class="text-xl font-semibold text-slate-300 dark:text-slate-300 hover:text-blue-400 transition-colors">
                    {{ post.title }}
                  </h2>
                  <span class="text-sm text-slate-500 dark:text-slate-400">
                    {{ formatDate(post.date) }}
                  </span>
                </div>
                <p class="text-gray-700 dark:text-gray-400 mb-4 line-clamp-3">
                  {{ post.description }}
                </p>
                <div class="flex flex-wrap gap-2">
                  <span v-for="tag in post.tags" :key="tag"
                    class="bg-neutral-700 text-slate-200 px-2 py-1 rounded-full text-xs">
                    {{ tag }}
                  </span>
                </div>
              </div>
            </NuxtLink>
          </article>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>