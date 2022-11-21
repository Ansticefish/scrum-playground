import Vue from 'vue'
import VueRouter from 'vue-router'
import Opening from '../views/Opening.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'opening',
    component: Opening
  }
]

const router = new VueRouter({
  routes
})

export default router
