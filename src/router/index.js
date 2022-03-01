import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MusicListView from '../views/MusicListView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/MusicListView',
    name:'MusicListView',
    component:MusicListView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
