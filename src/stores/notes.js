import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

export const useNotesStore = defineStore('notes', {
  state: () => ({
    notes: []
  }),
  actions: {
    addNote(title, body) {
      const newNote = {
        id: uuidv4(),
        title,
        body,
        updatedAt: Date.now()
      }

      this.notes.push(newNote)
      return newNote.id
    }
  },
  getters: {
    getNoteById(id) {
      return this.notes.find((note) => note.id === id)
    },
    getNotesSortedByUpdatedAt() {
      return this.notes.sort((a, b) => b.updatedAt - a.updatedAt)
    }
  }
})
