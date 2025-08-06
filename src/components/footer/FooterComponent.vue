<script lang="ts" setup>
import { ref } from 'vue'

// Components
import FooterInfoItemComponent from '@/components/footer/FooterInfoItemComponent.vue'

// Icons
import CarLogoIcon from '@/components/icons/CarLogoIcon.vue'
import MapPinAreaIcon from '@/components/icons/MapPinAreaIcon.vue'
import EnvelopeSimpleIcon from '@/components/icons/EnvelopeSimpleIcon.vue'
import PhoneIcon from '@/components/icons/PhoneIcon.vue'
import FacebookLogoIcon from '@/components/icons/FacebookLogoIcon.vue'
import InstagramLogoIcon from '@/components/icons/InstagramLogoIcon.vue'
import XLogoIcon from '@/components/icons/XLogoIcon.vue'
import YoutubeLogoIcon from '@/components/icons/YoutubeLogoIcon.vue'

// Stores
import { useCarStore } from '@/stores/car'

const carStore = useCarStore()

const mockData = ref({
  address: {
    icon: MapPinAreaIcon,
    title: 'Adresse',
    content: '1 Rue Géon Laumont, 44000 Nantes',
    link: 'https://www.google.com/maps/place/1+Rue+Géon+Laumont,+44000+Nantes',
    target: '_blank',
  },
  email: {
    icon: EnvelopeSimpleIcon,
    title: 'Email',
    content: 'contact@carrental.com',
    link: 'mailto:contact@carrental.com',
  },
  phone: {
    icon: PhoneIcon,
    title: 'Téléphone',
    content: '+33 02 34 56 78',
    link: 'tel:+3302345678',
  },
})

const usefulLinks = ref([
  {
    name: 'Accueil',
    path: '/',
  },
  {
    name: 'Véhicules',
    path: '/cars',
  },
  {
    name: 'Agences',
    path: '/agencies',
  },
])
</script>
<template>
  <div class="flex flex-col gap-10 m-16">
    <div class="flex justify-between">
      <div class="flex items-center gap-2">
        <CarLogoIcon class="w-14 h-14" />
        <span class="font-bold text-2xl">Car Rental</span>
      </div>
      <FooterInfoItemComponent
        v-for="(item, key) in mockData"
        :key="key"
        :icon="item.icon"
        :title="item.title"
        :content="item.content"
        :link="item.link"
      />
    </div>
    <div class="flex justify-between">
      <div class="flex flex-col justify-end gap-6">
        <div class="max-w-md">
          <span class="font-semibold text-lg"
            >Nam et odio luctus erat tempus aliquam vitae vel magna. Praesent sit amet sem libero.
            Etiam nec sapien neque. In hac habitasse platea dictumst.</span
          >
        </div>
        <div class="flex gap-4">
          <FacebookLogoIcon class="w-8 h-8 cursor-pointer" />
          <InstagramLogoIcon class="w-8 h-8 cursor-pointer" />
          <XLogoIcon class="w-8 h-8 cursor-pointer" />
          <YoutubeLogoIcon class="w-8 h-8 cursor-pointer" />
        </div>
      </div>
      <div class="flex flex-col gap-6">
        <span class="font-semibold text-2xl">Liens Utiles</span>
        <div class="flex flex-col gap-2">
          <router-link
            :to="link.path"
            v-for="link in usefulLinks"
            :key="link.name"
            class="text-lg cursor-pointer"
            >{{ link.name }}</router-link
          >
          <span class="text-lg cursor-pointer">À propos</span>
          <span class="text-lg cursor-pointer">Conditions Générales</span>
          <span class="text-lg cursor-pointer">Politique de Confidentialité</span>
        </div>
      </div>
      <div class="flex flex-col gap-6">
        <span class="font-semibold text-2xl">Véhicules</span>
        <div class="flex flex-col gap-2">
          <span v-for="car in carStore.carClasses" :key="car.id" class="text-lg cursor-pointer">{{
            car.name
          }}</span>
        </div>
      </div>
      <div class="flex flex-col gap-6">
        <span class="font-semibold text-2xl">Télécharger l'application</span>
        <div class="flex flex-col gap-4">
          <img src="@/assets/images/from_app_store.png" alt="Mobile App" class="w-48 h-14" />
          <img src="@/assets/images/from_google_play.png" alt="Mobile App" class="w-48 h-14" />
        </div>
      </div>
    </div>
  </div>
</template>
