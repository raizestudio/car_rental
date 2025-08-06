import { createRouter, createWebHistory } from 'vue-router'

import LandingView from '@/views/LandingView.vue'
import CarsView from '@/views/CarsView.vue'
import AgenciesView from '@/views/AgenciesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingView,
    },
    {
      path: '/cars',
      name: 'cars',
      component: CarsView,
    },
    {
      path: '/agencies',
      name: 'agencies',
      component: AgenciesView,
    },
  ],
})

export default router
