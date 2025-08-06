<script setup lang="ts">
import { ref } from 'vue'

// Components
import FactsItemComponent from '@/components/info/FactsItemComponent.vue'
import CarSimpleIcon from '@/components/icons/CarSimpleIcon.vue'
import UserIcon from '@/components/icons/UserIcon.vue'
import BuildingOfficeIcon from '@/components/icons/BuildingOfficeIcon.vue'
import RoadHorizonIcon from '@/components/icons/RoadHorizonIcon.vue'

const mockData = ref([
  { title: '320+', description: 'Véhicules disponibles', icon: CarSimpleIcon },
  { title: '5000+', description: 'Clients satisfaits', icon: UserIcon },
  { title: '150+', description: 'Agences à travers le monde', icon: BuildingOfficeIcon },
  { title: '50m+', description: 'Km parcourus', icon: RoadHorizonIcon },
])
</script>
<template>
  <div class="relative flex flex-col gap-20 m-16 px-16 py-20 bg-violet-900 rounded-2xl">
    <div class="flex flex-col items-center gap-8 z-10">
      <span class="font-bold text-5xl text-white">En quelques chiffres</span>
      <span class="text-lg text-white text-center max-w-2xl"
        >Fusce ullamcorper ligula felis, at mollis urna mollis quis. Praesent placerat, eros vitae
        imperdiet finibus, neque sem pretium mi, at ornare augue dolor ac dui.
      </span>
    </div>
    <div class="z-10">
      <div class="flex justify-around gap-8">
        <FactsItemComponent
          v-for="(item, index) in mockData"
          :key="index"
          :title="item.title"
          :description="item.description"
          :icon="item.icon"
        />
      </div>
    </div>
    <img
      src="@/assets/images/facts_bg.png"
      alt="Facts Image"
      class="absolute bottom-0 left-[calc(50%-400px)] h-full rounded-xl opacity-20"
    />
  </div>
</template>
