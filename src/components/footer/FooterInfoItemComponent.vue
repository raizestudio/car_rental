<script setup lang="ts">
import { type Component } from 'vue'

const props = defineProps<{
  icon: Component
  title: string
  content: string
  link?: string
  target?: string
}>()
</script>
<template>
  <div class="flex items-center gap-4">
    <div class="flex justify-center items-center p-3 bg-orange-400 rounded-full">
      <component :is="props.icon" class="w-10 h-10 text-white" />
    </div>
    <a v-if="props.link" :href="props.link" :target="props.target" class="flex flex-col">
      <span class="text-lg">{{ props.title }}</span>
      <span class="font-semibold text-xl">{{ props.content }}</span>
    </a>
    <div v-else class="flex flex-col">
      <span class="text-lg">{{ props.title }}</span>
      <span class="font-semibold text-xl">{{ props.content }}</span>
    </div>
  </div>
</template>
