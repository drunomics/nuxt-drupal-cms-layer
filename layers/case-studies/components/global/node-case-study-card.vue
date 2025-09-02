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
        <h2 v-if="title" class="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {{ title }}
        </h2>
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
}>()
</script>
