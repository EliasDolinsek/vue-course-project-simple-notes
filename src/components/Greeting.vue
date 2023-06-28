<script setup>
import IconHello from '@/components/icons/IconHello.vue'
</script>

<template>
  <div class="d-flex flex-column align-items-center">
    <IconHello />
    <h3 class="mt-3">Welcome to Simple Notes</h3>
    <router-link :to="{ name: 'notes'}">SHOW NOTES</router-link>
  </div>
</template>
