<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <div class="mb-8">
      <component :is="useDrupalCe().renderCustomElements(featuredImage)" class="w-full h-auto rounded-lg shadow-lg mb-6" />
      <h1 v-if="title" class="text-4xl font-bold text-gray-900 mb-4">{{ title }}</h1>
    </div>
    <div class="prose max-w-none mb-8" v-html="content"></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  // Layout-builder support.
  sections?: object;
  title?: string;
  featuredImage?: object;
  content?: string;
}>();
</script>
