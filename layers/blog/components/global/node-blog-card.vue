<template>
  <nuxt-link :to="path.pathAlias" class="block">
    <article class="rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 bg-white shadow-sm overflow-hidden">
      <div class="overflow-hidden">
        <component
          :is="renderCustomElements(featuredImage)"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="p-4">
        <h2 v-if="title" class="text-lg font-semibold text-gray-900">
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
