import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/Landing.vue'
import Home from '../views/Home.vue'
import Wishlist from '../views/Wishlist.vue'
import Detail from '../views/Detail.vue'
import Error from '../views/Error.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing,
      children: [
        {
          name: 'Register', 
          path: 'register', 
          component: Register,
          beforeEnter: (to, from) => {
            if (localStorage.getItem('access_token') && to.name == 'Register') {
              return { name: 'Home' }
            }
          }
        },
        { 
          name: 'Login', 
          path: 'login', 
          component: Login,
          beforeEnter: (to, from) => {
            if (localStorage.getItem('access_token') && to.name == 'Login') {
              return { name: 'Home' }
            }
          } 
        }
      ]
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/wishlist',
      name: 'Wishlist',
      component: Wishlist,
      beforeEnter: (to, from) => {
        if (!localStorage.getItem('access_token') && to.name == 'Wishlist') {
          return { name: 'Landing' }
        }
      }
    },
    {
      path: '/transportation/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/:pathMatch(.*)',
      name: 'Error',
      component: Error
    },
  ]
})

export default router
