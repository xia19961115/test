import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    //重定向(当没用路径的时候重定向到home页面)
    redirect:'/home',
  },
  {
    path: '/home',
    name: 'Home',
    //meta 元数据
    meta:{
      title:'主页'
    },
    component: Home,
    //表示里面嵌套的子路由
    children:[
      //设置子路由的默认路径
      {
        path:'',
        redirect:'news'
      },
      {
        // 子路由不用加 /
        path:'news',
        meta:{
          title:'新闻'
        },
        component: () =>import('../views/HomeNews.vue')
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    meta:{
      title:"关于"
    },
    component: () => import('../views/About.vue')
  },
  {
    //进行动态传参
    path:'/my/:id',
    name:'my',
    meta:{
      title:'我的'
    },
    component:()=>import('../views/my.vue')
  },
  {
    path:'/profile',
    name:'profile',
    meta:{
      title:'档案'
    },
    component:()=>import('../views/profile.vue')
  }
]

const router = new VueRouter({
  //不写默认hash模式 用mode 可以转成 history模式
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 全局导航守卫
// 前置钩子(路由跳转之前触发对应的事件)
router.beforeEach((to,from,next)=>{
// to: Route: 即将要进入的目标 路由对象(表示处于活跃的路由)
// from: Route: 当前导航正要离开的路由
// next() 前置钩子必须调用next方法 也可以指定去某个路由
document.title=to.matched[0].meta.title
next()
//其实这里可以做一种访问权限(如XX路由需要登录才能进入)

})

//全局后置钩子(路由跳转后触发的事情)
// router.afterEach(()=>{
// console.log("++++");
// 业务代码
// })
//还有路由守卫,组件守卫 看文档

export default router
