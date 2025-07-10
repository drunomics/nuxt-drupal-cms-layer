<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <div class="mb-8">
      <component :is="useDrupalCe().renderCustomElements(featuredImage)" class="w-full h-auto rounded-lg shadow-lg mb-6" />
      <h1 v-if="title" class="text-4xl font-bold text-gray-900 mb-4">{{ title }}</h1>
    </div>
    <div class="bg-white rounded-lg shadow-md p-6 mb-8">
      <div v-if="date" class="mb-4">
        <h3 class="text-lg font-semibold text-gray-700 mb-2">Date:</h3>
        <p class="text-gray-600">{{ formatDate(date.value) }} - {{ formatDate(date.endValue) }}</p>
      </div>
      <div v-if="locationName" class="mb-4">
        <h3 class="text-lg font-semibold text-gray-700 mb-2">Venue:</h3>
        <p class="text-gray-600">{{ locationName }}</p>
      </div>
      <div v-if="locationAddress" class="mb-4">
        <p class="text-gray-600">{{ locationAddress.addressLine1 }}</p>
        <p class="text-gray-600">{{ locationAddress.locality }},
          {{ locationAddress.administrativeArea }} {{ locationAddress.postalCode }}</p>
      </div>
      <div v-if="link" class="mb-4">
        <a :href="link.uri" target="_blank">{{ link.title }}</a>
      </div>
    </div>
    <div class="prose max-w-none mb-8" v-html="content"></div>
    <div v-if="geofield" class="rounded-lg overflow-hidden shadow-lg">
      <div class="h-[400px]">
        <LMap
          ref="map"
          :zoom="zoom"
          :center="latlng"
          :use-global-leaflet="false"
          class="h-full w-full"
        >
          <LTileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors"
            layer-type="base"
            name="OpenStreetMap"
          />
          <LMarker :lat-lng="latlng" />
        </LMap>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { LatLngExpression } from 'leaflet';

const props = defineProps<{
  // Layout-builder support.
  sections?: object;
  title?: string;
  featuredImage?: object;
  content?: string;
  geofield?: {
    lat: number;
    lon: number;
  };
  date?: {
    value: string;
    endValue: string;
    duration: string;
    rrule: string;
    rruleIndex: string;
    timezone: string;
  };
  locationName?: string;
  locationAddress?: {
    addressLine1: string;
    locality: string;
    administrativeArea: string;
    postalCode: string;
  };
  link?: {
    uri: string;
    title: string;
  };
}>();

const zoom = ref(13);
const latlng = computed<LatLngExpression>(() => {
  if (props.geofield) {
    return [props.geofield.lat, props.geofield.lon];
  }
  return [0, 0];
});

const formatDate = (timestamp: string) => {
  if (!timestamp) return '';
  const date = new Date(Number(timestamp) * 1000);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
};
</script>
