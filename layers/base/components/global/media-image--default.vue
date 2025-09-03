<template>
  <div class="relative">
    <img
      :src="image.url"
      :title="image.title"
      :alt="image.alt"
      :width="image.width"
      :height="image.height"
    >
    <div v-if="copyright" class="absolute bottom-0 right-0 bg-black/50 text-white text-xs px-2 py-1">
      {{ copyright }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  image?: object
  copyright?: string
}>()
</script>
