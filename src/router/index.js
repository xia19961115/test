import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  // 访问不存在的页面 
  {
    path: '*',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  // {
  //   path: '/my',
  //   name: 'My',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/My.vue') 
  // },
  // {    
  //   path: '/file',
  //   name: 'File',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/File.vue') 
  // },
  // {    
  //   path: '/test',
  //   name: 'Test',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Test.vue') 
  // },
  // {    
  //   path: '/echart',
  //   name: 'Echart',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Echart.vue') 
  // },
  // {    
  //   path: '/news',
  //   name: 'News',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/News.vue') 
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
