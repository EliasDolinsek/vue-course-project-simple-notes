<script setup>
import moment from 'moment'
import { useNotesStore } from '../store/notes'
import { useRouter } from 'vue-router';

const notesStore = useNotesStore()
const router = useRouter()

const handleClick = (id) => {
  router.push({name: "notes/edit", params: { id }})
}

const addNewNote = () => {
  const id = notesStore.addNote('New Note', '')
  router.push({name: "notes/edit", params: { id }})
}
</script>

<template>
  <button type="button" class="btn btn-outline-primary w-100" @click="addNewNote">CREATE NOTE</button>
  <div class="list-group mt-3">
    <div
      v-for="note in notesStore.getNotesSortedByUpdatedAt"
      :key="note.id"
      @click="handleClick(note.id)"
      class="list-group-item list-group-item-action flex-column align-items-start"
      style="cursor: pointer"
      :class="{ active: $route.params.id === note.id }"
    >
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{{ note.title }}</h5>
        <small>{{ moment(note.updatedAt).fromNow() }}</small>
      </div>
      <p class="mb-1">
        {{ note.body.substring(0, 120) }}
      </p>
      <small>{{ note.body.length }} Words</small>
    </div>
  </div>
</template>
