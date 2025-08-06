<script setup lang="ts">
import { ref } from 'vue'

// Components
import OnBoardingInfoItemComponent from '@/components/info/OnBoardingInfoItemComponent.vue'

const mockData = ref([
  {
    id: 1,
    title: 'Sed consectetur sem',
    description:
      'In hac habitasse platea dictumst. Etiam mollis turpis et tristique luctus. Morbi posuere feugiat laoreet. Duis placerat semper felis in eleifend. Sed mollis massa lacus, in facilisis sem blandit nec..',
  },
  {
    id: 2,
    title: 'Mauris pellentesque est sed ',
    description:
      'Maecenas elementum efficitur sapien a aliquam. Donec nec magna posuere, blandit nibh tempus, accumsan est.',
  },
  {
    id: 3,
    title: 'Class aptent taciti sociosqu',
    description:
      'Duis sagittis, augue eget elementum lacinia, quam nisi posuere elit, a auctor lacus libero eu ligula. Nam venenatis dolor vel tellus lobortis convallis.',
  },
  {
    id: 4,
    title: 'Donec vitae nunc urna',
    description:
      'Aliquam bibendum diam id nunc accumsan sodales. Pellentesque eleifend ultricies maximus. Curabitur auctor turpis tempor est dignissim, eget porta diam dictum.',
  },
])
</script>
<template>
  <div class="flex gap-8 px-20 py-16">
    <!-- <div class="w-1/2 bg-violet-800 rounded-xl"></div> -->
    <div class="w-1/2 px-8 flex justify-center items-center">
      <img
        src="@/assets/images/onboarding_bg.png"
        class="w-full h-full rounded-xl p-16"
        alt="Onboarding Info Image"
      />
    </div>
    <div class="flex flex-col justify-center gap-16 px-16">
      <OnBoardingInfoItemComponent v-for="item in mockData" :key="item.id" :data="item" />
    </div>
  </div>
</template>
