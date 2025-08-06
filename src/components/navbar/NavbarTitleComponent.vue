<script setup lang="ts">
// Icons
import CarLogoIcon from '@/components/icons/CarLogoIcon.vue'

const appName = import.meta.env.VITE_APP_NAME
</script>
<template>
  <div class="flex items-center gap-3">
    <CarLogoIcon class="inline-block w-10 h-10 text-gray-800" />
    <span class="font-black text-3xl text-gray-800 select-none">{{
      $capitalizeWords(appName)
    }}</span>
  </div>
</template>
