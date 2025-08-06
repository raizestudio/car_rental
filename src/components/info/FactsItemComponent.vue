<script setup lang="ts">
import { type Component } from 'vue'

const props = defineProps<{
  title: string
  description: string
  icon: Component
}>()
</script>

<template>
  <div class="flex items-center gap-4 p-5 bg-white rounded-xl">
    <div class="p-3 bg-orange-400 rounded-xl">
      <component :is="props.icon" class="w-16 h-16 text-white" />
    </div>
    <div class="flex flex-col">
      <span class="text-4xl font-semibold text-gray-800">{{ props.title }}</span>
      <span class="text-gray-600">{{ props.description }}</span>
    </div>
  </div>
</template>
