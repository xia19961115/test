/*
 * @Description: 
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2022-06-05 19:32:14
 * @LastEditTime: 2023-06-29 00:33:34
 */
import Home from '../views/Home.vue'
const routes = [
    {
      path: '/home',
      name: 'Home',
      meta:{id:'1',name:'首页'},
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      meta:{id:'2',name:'关于'},
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path: '/my',
      name: 'My',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      meta:{id:'3',name:'我的'},
      component: () => import(/* webpackChunkName: "My" */ '../views/My.vue'),
      children: [
        {
          path: 'index1',
          name: 'MyIndex1',
          component: () => import(/* webpackChunkName: "My" */ '../views/101.vue'),
        }
      ]
    },
    {    
      path: '/file',
      name: 'File',
      meta:{id:'4',name:'文件'},
      component: () => import(/* webpackChunkName: "about" */ '../views/File.vue')
    },
    {    
      path: '/test',
      name: 'Test',
      meta:{id:'5',name:'测试'},
      component: () => import(/* webpackChunkName: "about" */ '../views/Test.vue') 
    },
    {    
      path: '/echart',
      name: 'Echart',
      meta:{id:'6'},
      component: () => import(/* webpackChunkName: "about" */ '../views/Echart.vue') 
    },
    {    
      path: '/news',
      name: 'News',
      meta:{id:'7'},
      component: () => import(/* webpackChunkName: "about" */ '../views/News.vue') 
    },
    {    
      path: '/up',
      name: 'Up',
      meta:{id:'7'},
      component: () => import(/* webpackChunkName: "about" */ '../views/Up.vue') 
    },
    {    
      path: '/page',
      name: 'Page',
      meta:{id:'7'},
      component: () => import(/* webpackChunkName: "about" */ '../views/Page.vue') 
    },
    {    
      path: '/silder',
      name: 'Silder',
      meta:{id:'7'},
      component: () => import(/* webpackChunkName: "about" */ '../views/silder.vue') 
    },
    {    
      path: '/waterFull',
      name: 'WaterFull',
      meta:{id:'7'},
      component: () => import(/* webpackChunkName: "about" */ '../views/waterFull.vue') 
    }
  ]
  export default routes