import Vue from 'vue'
import VueRouter from 'vue-router'
import Opening from '../views/Opening.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'opening',
    component: Opening
  },
  {
    path: '/quest1',
    name: 'quest1',
    component: () => import('../views/QuestOne.vue')
  },
   {
    path: '/quest2',
    name: 'quest2',
    component: () => import('../views/QuestTwo.vue')
  },
  {
    path: '/quest3',
    name: 'quest3',
    component: () => import('../views/QuestThree.vue')
  },
  {
    path: '/quest4',
    name: 'quest4',
    component: () => import('../views/QuestFour.vue')
  },
  {
    path: '/quest5',
    name: 'quest5',
    component: () => import('../views/QuestFive.vue')
  },
  {
    path: '/ending',
    name: 'ending',
    component: () => import('../views/Ending.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router
