import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing'
import Resume from '../views/Resume'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/Resume',
    name: 'Resume',
    component: Resume
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router