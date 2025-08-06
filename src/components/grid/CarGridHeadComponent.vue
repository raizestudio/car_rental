<script setup lang="ts">
// Icons
import ArrowRightIcon from '@/components/icons/ArrowRightIcon.vue'
</script>
<template>
  <div class="flex justify-between items-center px-16 py-4">
    <span class="font-bold text-4xl max-w-md">Choisissez le vehicule qui vous plait</span>
    <router-link to="/cars" class="flex gap-4 items-center"
      ><span>Voir tout</span><ArrowRightIcon
    /></router-link>
  </div>
</template>
