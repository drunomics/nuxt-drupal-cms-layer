<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <div class="mb-8">
      <component :is="useDrupalCe().renderCustomElements(featuredImage)" class="w-full h-auto rounded-lg shadow-lg mb-6" />
      <component :is="useDrupalCe().renderCustomElements(clientLogo)" class="w-80 mb-6" />
      <h1 v-if="title" class="text-4xl font-bold mb-4">{{ title }}</h1>
    </div>
    <div class="prose max-w-none mb-8 dark:prose-invert" v-html="content"></div>
    <a v-if="clientLink" :href="clientLink.clientLinkUri" target="_blank" class="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-200">Visit website</a>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  // Layout-builder support.
  sections?: object;
  title?: string;
  featuredImage?: object;
  clientLogo?: object;
  clientLink?: object;
  content?: string;
}>();
</script>
