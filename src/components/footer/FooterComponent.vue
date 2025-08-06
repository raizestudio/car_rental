<script lang="ts" setup>
// Icons
import CarSimpleIcon from '@/components/icons/CarSimpleIcon.vue'
import FacebookLogoIcon from '@/components/icons/FacebookLogoIcon.vue'
import InstagramLogoIcon from '@/components/icons/InstagramLogoIcon.vue'
import XLogoIcon from '@/components/icons/XLogoIcon.vue'
import YoutubeLogoIcon from '@/components/icons/YoutubeLogoIcon.vue'
</script>
<template>
  <div class="m-16">
    <div class="flex justify-between">
      <div class="flex items-center">
        <CarSimpleIcon class="w-16 h-16" />
        <span class="font-bold text-2xl">Car Rental</span>
      </div>
      <div>
        <div class="flex items-center">
          <CarSimpleIcon />
          <div class="flex flex-col">
            <span>Adresse</span>
            <span>1 Rue Géon Laumont, 44000 Nantes</span>
          </div>
        </div>
      </div>
      <div>
        <div class="flex items-center">
          <CarSimpleIcon />
          <div class="flex flex-col">
            <span>Email</span>
            <span>contact@carrental.com</span>
          </div>
        </div>
      </div>
      <div>
        <div class="flex items-center">
          <CarSimpleIcon />
          <div class="flex flex-col">
            <span>Telephone</span>
            <span>+33 02 34 56 78</span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-between">
      <div>
        <div>
          <span class="font-semibold"
            >Suspendisse finibus leo id scelerisque mattis. Vivamus nec euismod ante.</span
          >
        </div>
        <div>
          <FacebookLogoIcon class="w-8 h-8 inline mx-2" />
          <InstagramLogoIcon class="w-8 h-8 inline mx-2" />
          <XLogoIcon class="w-8 h-8 inline mx-2" />
          <YoutubeLogoIcon class="w-8 h-8 inline mx-2" />
        </div>
      </div>
      <div>
        <span>Liens Utiles</span>
        <ul>
          <li>Accueil</li>
          <li>Véhicules</li>
          <li>Agences</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <span>Véhicules</span>
        <ul>
          <li>Sedan</li>
          <li>Suv</li>
          <li>Camion</li>
          <li>Van</li>
        </ul>
      </div>
      <div>
        <span>Télécharger l'application</span>
        <div>
          <img src="@/assets/images/from_app_store.png" alt="Mobile App" class="w-64 h-20" />
          <img src="@/assets/images/from_google_play.png" alt="Mobile App" class="w-64 h-20" />
        </div>
      </div>
    </div>
  </div>
</template>
