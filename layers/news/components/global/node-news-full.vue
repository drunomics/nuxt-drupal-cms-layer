<template>
  <div class="node">
    <h2 v-if="title">News: {{ title }}</h2>
    <component :is="useDrupalCe().renderCustomElements(sections)" />
  </div>
</template>

<script setup lang="ts">
const { getPage } = useDrupalCe();
defineProps<{
  // Layout-builder support.
  sections?: object;
}>()

const title = getPage().value.title;
</script>
