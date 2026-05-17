import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import NotesView from '@/views/NotesView.vue'
import NoteView from '@/views/NoteView.vue'

import { getCurrentUser } from 'vuefire'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', component: LoginView, name: 'login'},
    {path: '/cadastro', component: RegisterView, name: 'register'},
    {
      path: '/notas', 
      component: NotesView, 
      name: 'notes',
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/notas/:id',
      component: NoteView,
      name: 'note',
      meta: {
        requiresAuth: true
      }
    }
  ],
})

router.beforeEach(async (to)=>{
  if(to.meta.requiresAuth){
    const user = await getCurrentUser()

    if(!user) return '/'
  }
})

export default router
