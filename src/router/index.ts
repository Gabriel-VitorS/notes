import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import NotesView from '@/views/NotesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', component: LoginView, name: 'login'},
    {path: '/cadastro', component: RegisterView, name: 'register'},
    {path: '/notas', component: NotesView, name: 'notes'}
  ],
})

export default router
