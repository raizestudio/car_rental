<script setup lang="ts">
import { ref } from 'vue'

// Components
import InfoComponent from '@/components/info/InfoComponent.vue'

// Icons
import MapPinAreaIcon from '@/components/icons/MapPinAreaIcon.vue'
import CarSimpleIcon from '@/components/icons/CarSimpleIcon.vue'
import WalletIcon from '@/components/icons/WalletIcon.vue'

const mockData = ref([
  {
    icon: MapPinAreaIcon,
    title: 'Disponibilité',
    description:
      'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
  },
  {
    icon: CarSimpleIcon,
    title: 'Confort',
    description:
      'Integer pharetra tellus et ante hendrerit, in lobortis dui ultricies. Quisque pretium, metus eget facilisis laoreet, leo ex semper nulla.',
  },
  {
    icon: WalletIcon,
    title: 'Economies',
    description:
      'Etiam a scelerisque felis, quis accumsan augue. Etiam tempor urna sed cursus tincidunt. Vivamus maximus luctus diam elementum semper.',
  },
])
</script>
<template>
  <div class="flex flex-col gap-20 xl:gap-0 xl:flex-row justify-around px-16 py-12">
    <InfoComponent v-for="data in mockData" :key="data.title" :data="data" />
  </div>
</template>
