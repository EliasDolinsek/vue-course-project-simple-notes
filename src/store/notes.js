import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import { computed, ref } from 'vue'

export const useNotesStore = defineStore('notes', () => {
  const notes = ref([])

  const addNote = (title, body) => {
    const newNote = {
      id: uuidv4(),
      title,
      body,
      updatedAt: Date.now()
    }

    notes.value.push(newNote)
    return newNote.id
  }

  const updateNote = (id, title, body) => {
    const note = notes.value.find((note) => note.id === id)
    note.title = title
    note.body = body
    note.updatedAt = Date.now()
  }

  const deleteNote = (id) => {
    notes.value.splice(
      notes.value.findIndex((item) => item.id === id),
      1
    )
  }

  const getNoteById = computed(() => {
    return (noteId) => notes.value.find((note) => note.id === noteId)
  })

  const getNotesSortedByUpdatedAt = computed(() => {
    return notes.value.sort((a, b) => b.updatedAt - a.updatedAt)
  })

  const doesNoteWithIdExist = computed(() => {
    return (id) => notes.value.find((item) => item.id === id) != undefined
  })

  return { notes, addNote, updateNote, deleteNote, getNoteById, getNotesSortedByUpdatedAt, doesNoteWithIdExist }
})
