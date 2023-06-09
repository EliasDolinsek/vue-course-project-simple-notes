<script setup>
import { v4 as uuidv4 } from "uuid";
import { ref } from 'vue'
import NotesOverview from '../components/NotesOverview.vue';

const notes = ref([
    {
        id: uuidv4(),
        title: "Note 1",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        updatedAt: Date.now()
    },
    {
        id: uuidv4(),
        title: "Note 2",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        updatedAt: Date.now()
    },
    {
        id: uuidv4(),
        title: "Note 3",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        updatedAt: Date.now()
    }
])
</script>

<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col-4">
        <NotesOverview :notes="notes" />
      </div>
      <div class="col-6">
        <router-view />
      </div>
    </div>
  </div>
</template>
