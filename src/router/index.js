import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotesView from '../views/NotesView.vue'
import NotesEditView from '../views/NotesEditView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/notes',
      name: 'notes',
      component: NotesView
      // TODO: 1. Erstelle einen Nested-Route für das bearbeiten einer Notiz
    }
  ]
})

export default router
