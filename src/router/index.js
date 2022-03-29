import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/home',
    component: Home,
    children: [
      {
        path: '/home',
        name: 'HomeIndex',
        component : () => import('../views/HomeIndex.vue')
      },
      {
        path: '/northCity',
        name: 'NorthCity',
        component : () => import('../views/Travelinfo/NorthCity.vue')
      },
      {
        path: '/midCity',
        name: 'MidCity',
        component : () => import('../views/Travelinfo/MidCity.vue')
      },
      {
        path: '/southCity',
        name: 'SouthCity',
        component : () => import('../views/Travelinfo/SouthCity.vue')
      },
      {
        path: '/eastCity',
        name: 'EastCity',
        component : () => import('../views/Travelinfo/EastCity.vue')
      },
      {
        path: '/outerIsland',
        name: 'OuterIsland',
        component : () => import('../views/Travelinfo/OuterIsland.vue')
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
