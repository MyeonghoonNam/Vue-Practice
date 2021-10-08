// import { createRouter, createWebHashHistory } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
// import Home from './Home'
import About from './About'
// import NotFound from './NotFound'
// import Docs from './Docs'
// import DocsId from './DocsId'

export default createRouter({
  // history: createWebHistory(),
  // routes: [
  //   {
  //     path: '/',
  //     name: 'home',
  //     component: Home
  //   },
  //   {
  //     path: '/about',
  //     name: 'about',
  //     component: About
  //   },
  //   {
  //     path: '/documents',
  //     component: Docs,
  //     children: [
  //       {
  //         path: ':id',
  //         name: 'docsId',
  //         component: DocsId
  //       }
  //     ]
  //   },
  //   {
  //     path: '/:notFound(.*)',
  //     component: NotFound
  //   }
  // ]
  history: createWebHistory(),
  routes: [
    {
      path: '/about',
      name: 'about',
      component: About
    },
  ]
})