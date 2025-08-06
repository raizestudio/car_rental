<script lang="ts" setup>
//Icons
import CarLogoIcon from '@/components/icons/CarLogoIcon.vue'
</script>

<template>
  <div class="flex items-center m-16 p-16 bg-violet-800 rounded-xl">
    <div class="flex flex-col gap-8">
      <div class="flex flex-col gap-4">
        <span class="font-bold text-white text-6xl max-w-4xl"
          >Profitez de chaque kilomètre avec notre service de location de voitures !</span
        >
        <span class="text-white text-lg mt-4 mb-8 max-w-3xl"
          >Nullam bibendum gravida feugiat. Duis orci urna, ornare vel diam vitae, pharetra sagittis
          mi. Praesent non orci pretium, lacinia dolor nec, consectetur nisl.
        </span>
      </div>
      <div class="flex max-w-lg p-2 bg-white rounded-xl">
        <input type="text" placeholder="Ville" class="grow mx-2 text-xl outline-0" />
        <button
          class="px-4 py-2 font-semibold text-lg text-white bg-orange-400 hover:bg-orange-500 transition-colors duration-300 rounded-xl cursor-pointer"
        >
          Rechercher
        </button>
      </div>
    </div>
    <div class="flex justify-center grow">
      <CarLogoIcon class="w-124 h-auto mx-auto mt-8" :stroke="'#fff'" />
    </div>
  </div>
</template>
