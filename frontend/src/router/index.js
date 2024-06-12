import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CustomerForm from '../views/CustomerForm.vue'
import CustomerUpdate from '../views/CustomerUpdate.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/customer',
    name: 'customer',
    component: () => import(/* webpackChunkName: "about" */ '../views/CustomerView.vue')
  },
  {
    path: '/customerForm',
    name: 'customerForm',
    component: CustomerForm
  },
  {
    path: '/customerUpdate/:id',
    name: 'customerUdate',
    component: CustomerUpdate
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
