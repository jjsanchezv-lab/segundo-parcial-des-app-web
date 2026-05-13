import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '../views/LoginView.vue'
import Menu from '../views/MenuView.vue'
import Dashboard from '../views/DashboardView.vue'
import Carrito from '../views/CarritoView.vue'
import Reservas from '../views/ReservasView.vue'

const routes = [
  { path: '/', redirect: '/login' },

  { path: '/login', component: LoginView },
  { path: '/dashboard', component: Dashboard },
  { path: '/menu', component: Menu },
  { path: '/carrito', component: Carrito },
  { path: '/reservas', component: Reservas }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

