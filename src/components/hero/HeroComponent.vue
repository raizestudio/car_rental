<script setup lang="ts">
// Components
import LocationAutoComplete from '@/components/input/LocationAutoComplete.vue'

// Stores
import { useCarStore } from '@/stores/car'

const carStore = useCarStore()
</script>
<template>
  <div class="relative flex justify-between gap-8 m-16 p-18 bg-violet-900 rounded-2xl">
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
        <select class="p-3 rounded bg-white border border-gray-200" placeholder="Type de véhicule">
          <option v-for="carType in carStore.carClasses" :key="carType.id" :value="carType.name">
            {{ carType.name }}
          </option>
        </select>
        <LocationAutoComplete />
        <input
          type="date"
          class="p-2 rounded bg-white border border-gray-200"
          placeholder="Date de prise en charge"
        />
        <LocationAutoComplete />
        <input
          type="date"
          class="p-2 rounded bg-white border border-gray-200"
          placeholder="Date de retour"
        />
        <button
          class="p-2 bg-orange-400 text-white text-lg font-semibold rounded-lg hover:bg-orange-500 transition-colors cursor-pointer"
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
      class="absolute -bottom-16 left-[calc(50%-300px)] h-full"
    />
  </div>
</template>
