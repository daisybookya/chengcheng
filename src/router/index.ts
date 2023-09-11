import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/works',
    name: 'Works',
    component: ()=> import('../views/WorkView.vue')
  },
  {
    path: '/work-detail/:id',
    name: 'WorkDetail',
    component: ()=> import('../views/WorkDetailView.vue')
  },
  // {
  //   path: '/service',
  //   name: 'Service',
  //   component: () => import('../views/ServiceView.vue')
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  },
  // {
  //   path: '/contact',
  //   name: 'Contact',
  //   component: () => import('../views/ContactView.vue')
  // },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
