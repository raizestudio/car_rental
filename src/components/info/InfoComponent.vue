<script setup lang="ts">
import { ref, type Component } from 'vue'

const isHovered = ref(false)

defineProps<{
  data: {
    icon: Component
    title: string
    description: string
  }
}>()
</script>

<template>
  <div
    class="flex flex-col items-center gap-4"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <component
      :is="data.icon"
      class="w-28 h-28 transition-colors duration-500"
      :class="{ 'text-gray-400': !isHovered, 'text-gray-800': isHovered }"
    />
    <div class="flex flex-col items-center gap-2">
      <span class="font-bold text-3xl"> {{ data.title }} </span>
      <span class="max-w-xs text-center">
        {{ data.description }}
      </span>
    </div>
  </div>
</template>
