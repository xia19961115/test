import Home from '../views/Home.vue'
const routes = [
    {
      path: '/home',
      name: 'Home',
      meta:{id:'1'},
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      meta:{id:'2'},
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
      meta:{id:'3'},
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
      meta:{id:'4'},
      component: () => import(/* webpackChunkName: "about" */ '../views/File.vue')
    },
    {    
      path: '/test',
      name: 'Test',
      meta:{id:'5'},
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
    }
  ]
  export default routes