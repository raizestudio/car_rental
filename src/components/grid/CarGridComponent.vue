<script setup lang="ts">
// Components
import CarGridHeadComponent from '@/components/grid/CarGridHeadComponent.vue'

// Icons
import GearShiftIcon from '@/components/icons/GearShiftIcon.vue'
import GasPumpIcon from '@/components/icons/GasPumpIcon.vue'
import WindIcon from '@/components/icons/WindIcon.vue'
</script>
<template>
  <CarGridHeadComponent />
  <div class="grid grid-cols-4 gap-10 px-16 py-8">
    <div class="flex flex-col">
      <img
        src="@/assets/images/car_placeholder.png"
        alt="Car Image"
        class="w-full h-64 object-contain rounded-lg mb-4 self-center"
      />
      <div class="flex justify-between">
        <span class="font-semibold text-xl">Mercedes</span>
        <span class="font-semibold text-xl text-violet-800">88€</span>
      </div>

      <div class="flex justify-between">
        <span class="text-gray-600">Sedan</span>
        <span class="text-gray-600">par jour</span>
      </div>
      <div class="flex justify-between">
        <div>
          <GearShiftIcon class="inline-block w-6 h-6" />
          <span>Automatique</span>
        </div>
        <div>
          <GasPumpIcon class="inline-block w-6 h-6" />
          <span>SP-95</span>
        </div>
        <div>
          <WindIcon class="inline-block w-6 h-6" />
          <span>Climatisation</span>
        </div>
      </div>
      <div class="">
        <button class="w-full px-6 py-2 text-white bg-violet-800 rounded-lg transition-colors">
          Détails
        </button>
      </div>
    </div>
  </div>
</template>
