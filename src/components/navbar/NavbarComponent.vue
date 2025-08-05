<script setup lang="ts">
// Icons
// import UserIcon from '@/components/icons/UserIcon.vue'
import CarSimpleIcon from '@/components/icons/CarSimpleIcon.vue'
import PhoneIcon from '@/components/icons/PhoneIcon.vue'
</script>
<template>
  <div class="flex items-center h-16 px-8">
    <div class="flex items-center gap-3">
      <CarSimpleIcon class="inline-block w-8 h-8 text-gray-800" />
      <span class="font-black text-3xl text-gray-800">Car Rental</span>
    </div>
    <div class="grow flex justify-center">
      <span class="text-gray-600 text-lg ml-4">Accueil</span>
      <span class="text-gray-600 text-lg ml-4">Véhicules</span>
      <span class="text-gray-600 text-lg ml-4">Agences</span>
      <span class="text-gray-600 text-lg ml-4">Contact</span>
    </div>
    <div>
      <div class="flex items-center gap-2">
        <PhoneIcon class="w-8 h-8 text-gray-800" />
        <div class="flex flex-col">
          <span>Besoin d'aide</span>
          <span>+33 02 34 56 78</span>
        </div>
      </div>
    </div>
  </div>
</template>
