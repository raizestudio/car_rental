<script setup lang="ts">
// Icons
import MapPinAreaIcon from '@/components/icons/MapPinAreaIcon.vue'
import EnvelopeSimpleIcon from '@/components/icons/EnvelopeSimpleIcon.vue'
import PhoneIcon from '@/components/icons/PhoneIcon.vue'
import ClockIcon from '@/components/icons/ClockIcon.vue'
</script>
<template>
  <div class="flex flex-col gap-10 mx-16 my-16">
    <div class="flex flex-col items-center gap-6">
      <h1 class="text-5xl font-black mb-4">Écrivez-nous</h1>
    </div>
    <div class="flex gap-8 m-16">
      <div class="grow bg-violet-900 rounded-2xl">left</div>
      <div class="w-2/3">
        <img
          src="@/assets/images/contact_placeholder.png"
          alt="Contact Image"
          class="w-full h-auto"
        />
      </div>
    </div>
    <div class="flex justify-between gap-6">
      <div class="flex items-center gap-4">
        <div class="flex justify-center items-center p-3 bg-orange-400 rounded-full">
          <MapPinAreaIcon class="w-10 h-10 text-white" />
        </div>
        <div class="flex flex-col">
          <span class="text-lg">Adresse</span>
          <span class="font-semibold text-xl">1 Rue Géon Laumont, 44000 Nantes</span>
        </div>
      </div>
      <div class="flex items-center gap-4">
        <div class="flex justify-center items-center p-3 bg-orange-400 rounded-full">
          <EnvelopeSimpleIcon class="w-10 h-10 text-white" />
        </div>
        <div class="flex flex-col">
          <span class="text-lg">Email</span>
          <span class="font-semibold text-xl">contact@carrental.com</span>
        </div>
      </div>
      <div class="flex items-center gap-4">
        <div class="flex justify-center items-center p-3 bg-orange-400 rounded-full">
          <PhoneIcon class="w-10 h-10 text-white" />
        </div>
        <div class="flex flex-col">
          <span class="text-lg">Téléphone</span>
          <span class="font-semibold text-xl">+33 1 23 45 67 89</span>
        </div>
      </div>
      <div class="flex items-center gap-4">
        <div class="flex justify-center items-center p-3 bg-orange-400 rounded-full">
          <ClockIcon class="w-10 h-10 text-white" />
        </div>
        <div class="flex flex-col">
          <span class="text-lg">Horaires</span>
          <span class="font-semibold text-xl">Lundi - Vendredi: 9h - 18h</span>
        </div>
      </div>
    </div>
    <div class="flex flex-col">
      <div class="flex justify-center">
        <span class="text-5xl font-black mb-20">Nos derniers articles</span>
      </div>
    </div>
  </div>
</template>
