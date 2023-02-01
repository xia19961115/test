/*
 * @Description: 
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2022-06-05 19:32:14
 * @LastEditTime: 2023-02-01 11:27:17
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
// import Home from '../views/Home.vue'
NProgress.configure({showSpinner: false}); // showSpinner：进度环显示隐藏
Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      redirect:'/home',
    },
    {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  // 访问不存在的页面 
  // {
  //   path: '*',
  //   name: '404',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/404.vue')
  // },
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
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (from === VueRouter.START_LOCATION) {
    console.log('初次导航');
  }
  NProgress.start()
  next()
  NProgress.done()
})
// router.afterEach(() => {
//   NProgress.done()
// })
// 防止点击相同路径报错
const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch((err) => err);
};
export default router
