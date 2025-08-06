<script setup lang="ts">
import { computed } from 'vue'

// Components
import CarGridHeadComponent from '@/components/grid/CarGridHeadComponent.vue'
import CarGridItemComponent from '@/components/grid/CarGridItemComponent.vue'

// Stores
import { useCarStore } from '@/stores/car'

const carStore = useCarStore()

const limitedCars = computed(() => carStore.mockCars.slice(0, 8))
</script>
<template>
  <CarGridHeadComponent />
  <div class="grid grid-cols-4 gap-10 px-16 py-8">
    <CarGridItemComponent v-for="car in limitedCars" :key="car.id" :car="car" />
  </div>
</template>
