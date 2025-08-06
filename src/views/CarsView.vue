<script setup lang="ts">
import { ref, type Component } from 'vue'

// Components
import CarGridComponent from '@/components/grid/CarGridComponent.vue'
import CarBrandBannerComponent from '@/components/banner/CarBrandBannerComponent.vue'

// Icons
import SedanIcon from '@/components/icons/SedanIcon.vue'
import ConvertibleIcon from '@/components/icons/ConvertibleIcon.vue'
import PickupIcon from '@/components/icons/PickupIcon.vue'
import SuvIcon from '@/components/icons/SuvIcon.vue'
import MinivanIcon from '@/components/icons/MinivanIcon.vue'

// Stores
import { useCarStore } from '@/stores/car'

const carStore = useCarStore()

const carFilterType = ref(0)

const iconMap: Record<string, Component> = {
  SedanIcon,
  ConvertibleIcon,
  PickupIcon,
  SuvIcon,
  MinivanIcon,
}
</script>
<template>
  <div class="flex flex-col gap-10 my-16">
    <div class="flex flex-col items-center gap-6">
      <h1 class="text-5xl font-black mb-4">Choisissez le type de véhicule</h1>
      <div class="flex gap-6">
        <button
          class="px-5 py-3 text-xl rounded-full cursor-pointer hover:bg-violet-800 hover:text-white"
          :class="
            carFilterType === 0
              ? 'bg-violet-900  text-white'
              : 'bg-gray-100 text-gray-800  transition-colors duration-300'
          "
          @click="carFilterType = 0"
        >
          Tous les véhicules
        </button>
        <button
          v-for="carType in carStore.carTypes"
          :key="carType.id"
          class="px-5 py-3 text-xl rounded-full cursor-pointer hover:bg-violet-800 hover:text-white"
          :class="
            carFilterType === carType.id
              ? 'bg-violet-900  text-white'
              : 'bg-gray-100 text-gray-800  transition-colors duration-300'
          "
          @click="carFilterType = carType.id"
        >
          <component :is="iconMap[carType.icon]" class="inline-block mr-2" />
          {{ carType.name }}
        </button>
      </div>
    </div>
    <CarGridComponent :filterType="carFilterType" />
    <CarBrandBannerComponent />
  </div>
</template>
