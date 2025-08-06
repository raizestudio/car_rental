import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCoreStore = defineStore('core', () => {
  const availablePages = ref([
    {
      name: 'home',
      label: 'Accueil',
      path: '/',
    },
    {
      name: 'cars',
      label: 'Voitures',
      path: '/cars',
    },
    {
      name: 'agencies',
      label: 'Agences',
      path: '/agencies',
    },
    {
      name: 'about',
      label: 'À propos',
      path: '/about',
    },
    {
      name: 'contact',
      label: 'Contact',
      path: '/contact',
    },
  ])
  // const activePage = ref('home')

  return { availablePages }
})
