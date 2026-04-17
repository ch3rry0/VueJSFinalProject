import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import MenuPage from '../pages/MenuPage.vue'
import CartPage from '../pages/CartPage.vue'
import AdminOrdersPage from '../pages/AdminOrdersPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/menu',
    name: 'menu',
    component: MenuPage
  },
  {
    path: '/panier',
    name: 'cart',
    component: CartPage
  },
  {
    path: '/admin-commandes',
    name: 'admin-orders',
    component: AdminOrdersPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
