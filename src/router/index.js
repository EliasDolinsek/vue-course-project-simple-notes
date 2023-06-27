import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotesView from '../views/NotesView.vue'
import NotesEditView from '../views/NotesEditView.vue'
import { useNotesStore } from '../store/notes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/notes',
      name: 'notes',
      component: () => NotesView,
      children: [
        {
          path: ':id',
          name: 'notes/edit',
          component: NotesEditView
        }
      ]
    }
  ]
})

router.beforeEach((to, from) => {
  if (to.name === 'notes/edit') {
    const notesStore = useNotesStore()
    if (!notesStore.doesNoteWithIdExist(to.params['id'])) {
      return { name: 'notes' }
    }
  }
})

export default router
