import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useReservationStore = defineStore('reservation', () => {
  const MockCities = ref([
    { id: 1, name: 'Paris' },
    { id: 2, name: 'Lyon' },
    { id: 3, name: 'Marseille' },
    { id: 4, name: 'Toulouse' },
    { id: 5, name: 'Nice' },
    { id: 6, name: 'Bordeaux' },
    { id: 7, name: 'Nantes' },
    { id: 8, name: 'Strasbourg' },
    { id: 9, name: 'Montpellier' },
    { id: 10, name: 'Lille' },
  ])
  return { MockCities }
})
