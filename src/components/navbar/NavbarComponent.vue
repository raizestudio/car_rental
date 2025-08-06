<script setup lang="ts">
import { useRoute } from 'vue-router'

// Components
import NavbarTitleComponent from '@/components/navbar/NavbarTitleComponent.vue'
// Icons
import PhoneIcon from '@/components/icons/PhoneIcon.vue'

// Stores
import { useCoreStore } from '@/stores/core'

const coreStore = useCoreStore()

const route = useRoute()
</script>
<template>
  <div class="flex items-center h-20 px-8">
    <NavbarTitleComponent />
    <div class="grow flex justify-center gap-8">
      <router-link
        v-for="page in coreStore.availablePages"
        :key="page.name"
        :to="page.path"
        class="font-semibold text-lg text-gray-600 hover:text-violet-800 cursor-pointer select-none"
        :class="{ 'text-gray-800 text-xl': route.path === page.path }"
        >{{ page.label }}</router-link
      >
    </div>
    <div>
      <a href="tel:+332345678" class="flex items-center gap-2">
        <div class="w-10 h-10 bg-violet-900 rounded-full flex items-center justify-center">
          <PhoneIcon class="w-6 h-6 text-white" />
        </div>
        <div class="flex flex-col">
          <span>Besoin d'aide?</span>
          <span class="font-semibold">+33 2 34 56 78</span>
        </div>
      </a>
    </div>
  </div>
</template>
