import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Archive from '@/components/archive'
import Login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/search/:query',
      name: 'Search',
      component: Home
    },
    {
      path: '/screenshot/:slug',
      name: 'Archive',
      component: Archive
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
