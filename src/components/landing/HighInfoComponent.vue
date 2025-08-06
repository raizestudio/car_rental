<script setup lang="ts">
// Icons
import MapPinAreaIcon from '@/components/icons/MapPinAreaIcon.vue'
import CarSimpleIcon from '@/components/icons/CarSimpleIcon.vue'
import WalletIcon from '@/components/icons/WalletIcon.vue'
</script>
<template>
  <div class="flex justify-around px-16 py-4">
    <div class="flex flex-col items-center">
      <MapPinAreaIcon class="w-28 h-28" />
      <span class="font-semibold text-xl"> Disponibilité </span>
      <span> Etiam tincidunt cursus leo.</span>
    </div>
    <div class="flex flex-col items-center">
      <CarSimpleIcon class="w-28 h-28" />
      <span class="font-semibold text-xl"> Confort </span>
      <span> Etiam tincidunt cursus leo.</span>
    </div>
    <div class="flex flex-col items-center">
      <WalletIcon class="w-28 h-28" />
      <span class="font-semibold text-xl"> Economies </span>
      <span> Etiam tincidunt cursus leo.</span>
    </div>
  </div>
</template>
