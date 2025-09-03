<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <div class="mb-8">
      <component :is="useDrupalCe().renderCustomElements(featuredImage)" class="w-full h-auto rounded-lg shadow-lg mb-6" />
      <h1 v-if="title" class="text-4xl font-bold mb-4">{{ title }}</h1>
      <div v-if="author || created" class="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
        <span v-if="author" class="flex items-center gap-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
          {{ author }}
        </span>
        <span v-if="created" class="flex items-center gap-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          {{ formatDate(created) }}
        </span>
      </div>
    </div>
    <div class="prose max-w-none mb-8 dark:prose-invert" v-html="content"></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  // Layout-builder support.
  sections?: object;
  title?: string;
  featuredImage?: object;
  content?: string;
  author?: string;
  created?: string;
}>();

const formatDate = (dateString: string) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
};
</script>
