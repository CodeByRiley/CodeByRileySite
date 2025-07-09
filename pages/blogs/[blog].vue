<script setup lang="ts">
import Navbar from '~/components/navbar.vue';
import Footer from '~/components/footer.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const slug = route.params.blog;

const { data: post, pending, error } = await useAsyncData('blog-post', () =>
  queryCollection('blog')
    .where('path', '=', `/blog/${slug}`)
    .first()
);
const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <div class="py-1" />
    <div class="flex-grow flex flex-col">
      <div class="w-full max-w-4xl mx-auto p-4">
        <div v-if="pending" class="text-center py-8 text-slate-300">Loading blog post...</div>
        <div v-else-if="error" class="text-center py-8 text-red-400">Error loading blog post: {{ error.message }}</div>
        <div v-else-if="!post" class="text-center py-8 text-slate-300">Blog post not found.</div>
        <div v-else>
          <article class="bg-white rounded-lg shadow border border-neutral-700 dark:bg-neutral-800 p-6">
            <header class="mb-6">
              <h1 class="text-3xl font-bold text-slate-300 mb-2">{{ post.title }}</h1>
              <div class="flex items-center gap-4 text-slate-400 mb-4">
                <span>{{ formatDate(post.date) }}</span>
                <span>by {{ post.author }}</span>
              </div>
              <p v-if="post.description" class="text-gray-400 text-lg mb-4">
                {{ post.description }}
              </p>
              <div v-if="post.tags && post.tags.length > 0" class="flex flex-wrap gap-2">
                <span v-for="tag in post.tags" :key="tag"
                  class="bg-neutral-700 text-slate-200 px-2 py-1 rounded-full text-xs">
                  {{ tag }}
                </span>
              </div>
            </header>
            <div class="prose prose-invert max-w-none">
              <ContentRenderer :value="post" />
            </div>
          </article>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.prose {
  @apply text-gray-300;
}
</style>