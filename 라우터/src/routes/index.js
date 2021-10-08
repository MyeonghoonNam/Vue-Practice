// import { createRouter, createWebHashHistory } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home'
import About from './About'
import Login from './Login'
// import NotFound from './NotFound'
// import Docs from './Docs'
// import DocsId from './DocsId'

export default createRouter({
  
  history: createWebHistory(),
  routes: [
    { 
      path: '/',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      component: Login
    }
  ]
})