import { createRouter, createWebHistory } from 'vue-router'

import LandingView from '@/views/LandingView.vue'
import CarsView from '@/views/CarsView.vue'
import AgenciesView from '@/views/AgenciesView.vue'
import AboutUsView from '@/views/AboutUsView.vue'
import ContactView from '@/views/ContactView.vue'
import CarView from '@/views/car/CarView.vue'

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
    {
      path: '/about',
      name: 'about',
      component: AboutUsView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/car/:id',
      name: 'car',
      component: CarView,
    },
  ],
})

export default router
