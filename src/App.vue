<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

// Layouts
import BaseLayout from '@/layouts/BaseLayout.vue'

const route = useRoute()

// Layout mapping
const layouts = {}

// Layout component
const LayoutComponent = computed(() => {
  return layouts[route.meta.layout as keyof typeof layouts] || BaseLayout
})
</script>

<template>
  <component :is="LayoutComponent">
    <router-view />
  </component>
</template>

<style scoped></style>
