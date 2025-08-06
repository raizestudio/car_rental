<script setup lang="ts">
import { ref, computed } from 'vue'

// Stores
import { useReservationStore } from '@/stores/reservation'

const reservationStore = useReservationStore()

const location = ref('')

const filteredCities = computed(() =>
  reservationStore.MockCities.filter((city) =>
    city.name.toLowerCase().includes(location.value.toLowerCase()),
  ),
)

const selectCity = (cityName: string) => {
  location.value = cityName
}
</script>

<template>
  <div class="relative">
    <input
      v-model="location"
      type="text"
      class="p-4 rounded-lg bg-white w-full border border-gray-200 outline-0"
      placeholder="Lieu de prise en charge"
    />
    <ul
      v-if="location && filteredCities.length"
      class="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded shadow"
    >
      <li
        v-for="city in filteredCities"
        :key="city.id"
        @click="selectCity(city.name)"
        class="p-2 cursor-pointer hover:bg-violet-100"
      >
        {{ city.name }}
      </li>
    </ul>
  </div>
</template>
