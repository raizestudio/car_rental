<script setup lang="ts">
// Stores
import { useAgencyStore } from '@/stores/agency'

const agencyStore = useAgencyStore()
</script>
<template>
  <div class="flex flex-col gap-10 mx-16 my-16">
    <div class="flex flex-col items-center gap-6">
      <h1 class="text-5xl font-black mb-4">Nos agences partenaires</h1>
    </div>
    <div class="grid grid-cols-4 gap-12">
      <div
        v-for="agency in agencyStore.agencies"
        :key="agency.id"
        class="flex flex-col gap-6 bg-gray-50 rounded-xl"
      >
        <img
          src="@/assets/images/agency_rentals.jpg"
          alt="Agency Logo"
          class="w-full rounded-t-2xl"
        />
        <div class="flex flex-col items-center gap-4 p-4">
          <span class="text-3xl font-bold">{{ agency.name }}</span>
          <span class="text-gray-500 text-center"> {{ agency.description }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
