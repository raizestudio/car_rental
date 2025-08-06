<script setup lang="ts">
const props = defineProps<{
  data: {
    id: number
    title: string
    description: string
  }
}>()
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex gap-4">
      <span
        class="flex justify-center items-center w-14 h-14 font-black text-xl bg-violet-900 rounded-full text-white"
        >{{ props.data.id }}</span
      >
      <span class="self-center font-bold text-xl">{{ props.data.title }}</span>
    </div>
    <div class="max-w-lg">
      <span>{{ props.data.description }}</span>
    </div>
  </div>
</template>
