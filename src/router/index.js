import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'


Vue.use(VueRouter)
import store from '../store/'

const routes = [{
    path: '/',
    name: 'home',
    component: Home,
    beforeEnter: (to, from, next) => {
      next()
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/user',
    name: 'user',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/User.vue'),
    beforeEnter: (to, from, next) => {
      if (store.getters.isLoggedIn) {
        next()
      } else {
        next(false)
      }

    }
  }
]

const router = new VueRouter({
  routes
})

export default router
