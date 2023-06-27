<script setup>
import NotesOverview from '../components/NotesOverview.vue';
</script>

<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col-4">
        <NotesOverview />
      </div>
      <div class="col-6">
        <router-view />
      </div>
    </div>
  </div>
</template>
