<script lang="ts" setup>
//Icons
import CarSimpleIcon from '@/components/icons/CarSimpleIcon.vue'
</script>

<template>
  <div class="flex items-center m-16 bg-violet-800 rounded-xl">
    <div class="flex flex-col">
      <span class="font-bold text-white text-2xl"
        >Profitez de chaque kilomètre avec notre service de location de voitures !</span
      >
      <span class="text-white text-lg mt-4 mb-8 max-w-lg"
        >Nullam bibendum gravida feugiat. Duis orci urna, ornare vel diam vitae, pharetra sagittis
        mi. Praesent non orci pretium, lacinia dolor nec, consectetur nisl.
      </span>
    </div>
    <div class="flex justify-center grow">
      <CarSimpleIcon class="w-80 h-80 text-white mx-auto mt-8" />
    </div>
  </div>
</template>
