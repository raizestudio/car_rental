<script setup lang="ts">
import { computed } from 'vue'

// Components
import CarGridHeadComponent from '@/components/grid/CarGridHeadComponent.vue'
import CarGridItemComponent from '@/components/grid/CarGridItemComponent.vue'

// Stores
import { useCarStore } from '@/stores/car'

const carStore = useCarStore()

const limitedCars = computed(() => carStore.mockCars.slice(0, 8))

const props = defineProps<{
  showHead?: boolean
  isLimited?: boolean
  filterType?: number
}>()

const filteredCars = computed(() => {
  if (props.filterType) {
    return carStore.mockCars.filter((car) => car.carType === props.filterType)
  }
  return carStore.mockCars
})
</script>
<template>
  <CarGridHeadComponent v-if="props.showHead" />
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 px-16 py-8">
    <CarGridItemComponent
      v-for="car in props.isLimited ? limitedCars : filteredCars"
      :key="car.id"
      :car="car"
    />
  </div>
</template>
