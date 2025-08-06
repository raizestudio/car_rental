<script setup lang="ts">
import { ref } from 'vue'

// Icons
import ToyotaLogoIcon from '@/components/icons/ToyotaLogoIcon.vue'
import FordLogoIcon from '@/components/icons/FordLogoIcon.vue'
import MercedesLogoIcon from '@/components/icons/MercedesLogoIcon.vue'
import JeepLogoIcon from '@/components/icons/JeepLogoIcon.vue'
import BmwLogoIcon from '@/components/icons/BmwLogoIcon.vue'
import AudiLogoIcon from '@/components/icons/AudiLogoIcon.vue'

const isHovered = ref(false)
</script>
<template>
  <div class="flex justify-between items-center mx-16 p-16 bg-gray-50 rounded-3xl">
    <ToyotaLogoIcon class="text-gray-400 hover:text-gray-800 transition-colors duration-500" />
    <FordLogoIcon class="text-gray-400 hover:text-gray-800 transition-colors duration-500" />
    <MercedesLogoIcon class="text-gray-400 hover:text-gray-800 transition-colors duration-500" />
    <JeepLogoIcon class="text-gray-400 hover:text-gray-800 transition-colors duration-500" />
    <BmwLogoIcon class="text-gray-400 hover:text-gray-800 transition-colors duration-500" />
    <AudiLogoIcon
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
      :stroke="isHovered ? '#000' : '#99a1af'"
      class="transition-colors duration-500"
    />
  </div>
</template>
