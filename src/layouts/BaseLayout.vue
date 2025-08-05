<script setup lang="ts">
import NavbarComponent from '@/components/navbar/NavbarComponent.vue'
import FooterComponent from '@/components/footer/FooterComponent.vue'
</script>

<template>
  <NavbarComponent />
  <RouterView />
  <FooterComponent />
</template>
