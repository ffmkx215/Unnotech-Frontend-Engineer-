import { createRouter, createWebHashHistory } from 'vue-router'
import Detail from '../views/About.vue'
import Home from '../views/Home.vue'

const routes = [
  {
    path: "/books/:id",
    name: 'BookDetailPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Detail
  },
  {
    path: "/",
    name: 'Home',
    component: Home
  },
  {
    path: "/books",
    name: 'Home',
    component: Home
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
