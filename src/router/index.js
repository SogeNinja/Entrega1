import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../pages/Home.vue';
import GenerarPassword from '../pages/GenerarPassword.vue';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home 
  },
  {
    path:'/password',
    component: GenerarPassword
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
