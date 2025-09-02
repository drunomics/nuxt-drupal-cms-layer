<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <div class="mb-8 text-center">
      <component :is="useDrupalCe().renderCustomElements(featuredImage)" class="image-wrapper max-w-[60%]" />
      <h1 v-if="title" class="text-4xl font-bold mb-4">{{ title }}</h1>
      <div v-if="personRoleJobTitle || personEmail || personPhoneNumber" class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 max-w-2xl mx-auto">
        <div v-if="personRoleJobTitle" class="mb-4">
          <div class="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <span class="font-medium">{{ personRoleJobTitle }}</span>
          </div>
        </div>
        <div v-if="personEmail && personEmail.length > 0" class="mb-4">
          <div v-for="(email, index) in personEmail" :key="index" class="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <a :href="'mailto:' + email.value" class="text-blue-600 dark:text-blue-400 hover:underline">{{ email.value }}</a>
          </div>
        </div>
        <div v-if="personPhoneNumber && personPhoneNumber.length > 0" class="mb-4 last:mb-0">
          <div v-for="(phone, index) in personPhoneNumber" :key="index" class="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            <a :href="'tel:' + phone.value.replace(/\s/g, '')" class="text-blue-600 dark:text-blue-400 hover:underline">{{ phone.value }}</a>
          </div>
        </div>
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
  personRoleJobTitle?: string;
  personEmail?: Array<{ value: string }>;
  personPhoneNumber?: Array<{ value: string }>;
}>();
</script>
<style lang="postcss">
.image-wrapper {
  @apply inline-block mb-6;
}
.image-wrapper img {
  @apply rounded-full;
}
</style>
