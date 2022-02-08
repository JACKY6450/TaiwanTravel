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
        path: '/keelung',
        name: 'Keelung',
        component : () => import('../views/Travelinfo/Keelung.vue')
      },
      {
        path: '/taipei',
        name: 'Taipei',
        component : () => import('../views/Travelinfo/Taipei.vue')
      },
      {
        path: '/newTaipei',
        name: 'NewTaipei',
        component : () => import('../views/Travelinfo/NewTaipei.vue')
      },
      {
        path: '/taichung',
        name: 'Taichung',
        component : () => import('../views/Travelinfo/Taichung.vue')
      },
      {
        path: '/tainan',
        name: 'Tainan',
        component : () => import('../views/Travelinfo/Tainan.vue')
      },
      {
        path: '/kaohsiung',
        name: 'Kaohsiung',
        component : () => import('../views/Travelinfo/Kaohsiung.vue')
      },
      {
        path: '/nantou',
        name: 'Nantou',
        component : () => import('../views/Travelinfo/Nantou.vue')
      },
      {
        path: '/hualien',
        name: 'Hualien',
        component : () => import('../views/Travelinfo/Hualien.vue')
      },
      {
        path: '/taitung',
        name: 'Taitung',
        component : () => import('../views/Travelinfo/Taitung.vue')
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
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
