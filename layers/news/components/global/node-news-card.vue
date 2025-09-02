<template>
  <nuxt-link :to="path.pathAlias" class="block">
    <article class="rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md dark:shadow-gray-900/50 overflow-hidden">
      <div class="overflow-hidden">
        <component
          :is="renderCustomElements(featuredImage)"
          class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div class="p-4">
        <h2 v-if="title" class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
          {{ title }}
        </h2>
        <div v-if="author || created" class="flex items-center gap-3 text-xs text-gray-600 dark:text-gray-400">
          <span v-if="author" class="flex items-center gap-1">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
            {{ author }}
          </span>
          <span v-if="created" class="flex items-center gap-1">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            {{ formatDate(created) }}
          </span>
        </div>
      </div>
    </article>
  </nuxt-link>
</template>

<script setup lang="ts">
const { renderCustomElements } = useDrupalCe()
defineProps<{
  title?: String;
  path?: object;
  featuredImage?: CustomElementContent;
  author?: string;
  created?: string;
}>()

const formatDate = (dateString: string) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(date);
}
</script>
