<script setup lang="ts">
import { ref } from 'vue'

// Icons
import ArrowLeftIcon from '@/components/icons/ArrowLeftIcon.vue'

// Stores
import { useCarStore } from '@/stores/car'

const carStore = useCarStore()

const isOpen = ref(false)
const selected = ref<string | null>(null)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectOption = (option: string) => {
  selected.value = option
  isOpen.value = false
}
</script>

<template>
  <div class="relative w-full">
    <!-- Trigger -->
    <div
      class="flex justify-between items-center p-4 bg-white border border-gray-200 rounded-lg cursor-pointer"
      @click="toggleDropdown"
    >
      <span class="text-gray-800 select-none">
        {{ selected || 'Type de véhicule' }}
      </span>
      <ArrowLeftIcon class="w-5 h-5 text-gray-500" :class="isOpen ? 'rotate-90' : '-rotate-90'" />
    </div>

    <!-- Options -->
    <ul
      v-if="isOpen"
      class="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded shadow-md"
    >
      <li
        v-for="carType in carStore.carTypes"
        :key="carType.id"
        @click="selectOption(carType.name)"
        class="p-3 hover:bg-violet-100 cursor-pointer"
      >
        {{ carType.name }}
      </li>
    </ul>
  </div>
</template>
