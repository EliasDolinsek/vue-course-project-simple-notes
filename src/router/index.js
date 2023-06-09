import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotesView from '../views/NotesView.vue'
import NotesEditView from '../views/NotesEditView.vue'

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

export default router
