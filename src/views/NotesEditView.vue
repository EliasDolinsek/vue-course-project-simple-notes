<script setup>
import moment from 'moment'
import { useRoute, useRouter } from 'vue-router'
import { useNotesStore } from '@/store/notes'
import { onMounted, ref, watch } from 'vue'

const route = useRoute()
const router = useRouter()
const notesStore = useNotesStore()

const note = ref()

const loadNote = () => {
  note.value = { ...notesStore.getNoteById(route.params.id) }
}

const updateNote = () => {
  notesStore.updateNote(note.value.id, note.value.title, note.value.body)
}

const deleteNote = () => {
  router.replace({name: "notes"})
  notesStore.deleteNote(note.id)
}

notesStore.$subscribe(() => {
  loadNote()
})

watch(route, () => {
  loadNote()
})

onMounted(() => {
  loadNote()
})
</script>

<template>
  <div v-if="note">
    <div class="form-group">
      <input v-model="note.title" type="text" class="form-control" placeholder="Enter title" />
      <small id="emailHelp" class="form-text text-muted">This must not be empty.</small>
    </div>
    <div class="form-group mt-3">
      <textarea
        v-model="note.body"
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="15"
      ></textarea>
    </div>
    <div class="d-flex justify-content-between mx-2 mt-3">
      <p class="text-muted">Last updated {{ moment(note.updatedAt).fromNow() }}</p>
      <p class="text-muted">{{ note.body.length }} Words</p>
    </div>
    <hr class="my-0" />
    <div class="d-flex justify-content-end mt-3">
      <button @click="deleteNote" type="button" class="btn btn-outline-secondary me-2">
        DELETE NOTE
      </button>
      <button @click="updateNote" type="button" class="btn btn-outline-success">
        SAVE CHANGES
      </button>
    </div>
  </div>
</template>
