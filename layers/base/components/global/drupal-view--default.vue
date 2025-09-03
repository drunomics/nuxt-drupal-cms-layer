<template>
  <div class="view">
    <h1 class="text-4xl font-bold mb-8 text-center tracking-tight">{{ title }}</h1>
    <div class="lg:flex lg:justify-around">
      <component
        :is="renderCustomElements(row)"
        v-for="(row, index) in rows"
        :key="index"
        class="w-full mb-8 lg:w-[33%]"
      />
    </div>
    <div class="text-center">
      <DrupalViewsPagination
        :total-pages="pager.totalPages"
        :current="pager.current"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  rows?: object[]
  pager?: object
}>()

const {renderCustomElements} = useDrupalCe()
</script>
