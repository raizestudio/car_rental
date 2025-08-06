<script setup lang="ts">
// Components
import LocationAutoComplete from '@/components/input/LocationAutoComplete.vue'
import DropdownComponent from '@/components/input/DropdownComponent.vue'
</script>
<template>
  <div
    class="relative flex flex-col xl:flex-row justify-between gap-8 m-16 p-18 bg-violet-900 rounded-2xl"
  >
    <div class="flex flex-col justify-center gap-8 max-w-xl z-10">
      <span class="text-white text-6xl font-bold"
        >Trouvez une voiture et réservez-la en quelques clics</span
      >
      <span class="text-white"
        >Vestibulum luctus cursus elit vel bibendum. Vivamus ultricies dui in purus fermentum, vel
        varius quam efficitur. Maecenas nisi arcu, lacinia eu justo nec, dictum pulvinar turpis.
        Nullam ac tincidunt tortor, vel euismod ipsum.
      </span>
      <router-link
        to="/cars"
        class="self-start px-4 py-2 text-white bg-orange-400 rounded-lg cursor-pointer"
      >
        Voir les véhicules
      </router-link>
    </div>
    <div class="flex flex-col justify-center gap-10 p-8 bg-white rounded-2xl z-10">
      <span class="font-semibold text-center text-3xl">Réservez dès maintenant</span>
      <div class="flex flex-col justify-center gap-6">
        <DropdownComponent />
        <LocationAutoComplete />
        <input
          type="date"
          class="p-4 rounded-lg bg-white border border-gray-200"
          placeholder="Date de prise en charge"
        />
        <LocationAutoComplete />
        <input
          type="date"
          class="p-4 rounded-lg bg-white border border-gray-200"
          placeholder="Date de retour"
        />
        <button
          class="p-4 bg-orange-400 text-white text-lg font-semibold rounded-lg hover:bg-orange-500 transition-colors cursor-pointer"
        >
          Réserver maintenant
        </button>
        <span class="text-gray-600 text-sm"
          >En réservant, vous acceptez nos
          <a href="#" class="text-violet-800">conditions générales</a> et notre
          <a href="#" class="text-violet-800">politique de confidentialité</a>.</span
        >
      </div>
    </div>
    <img
      src="@/assets/images/hero_bg.png"
      alt="Hero Image"
      class="absolute bottom-0 left-1/2 transform -translate-x-1/2 max-w-full max-h-full h-auto"
    />
  </div>
</template>
