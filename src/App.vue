<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/my">my</router-link> |
      <router-link to="/file">File</router-link> |
      <router-link to="/echart">Echart</router-link> |
      <router-link to="/test">Test</router-link> |
      <router-link to="/news">News</router-link> |
      <router-link to="/up">Up</router-link> |
      <router-link to="/silder">silder</router-link> |
      <router-link to="/waterFull">waterFull</router-link> |
      <router-link to="/scrollView">scrollView</router-link> |
      <router-link to="/dialog">dialog</router-link> |
      <router-link to="/calendar">Calendar</router-link> |
      <router-link to="/pagination">Pagination</router-link> |
      <span @click="handleP(1)">page1</span> |
      <span @click="handleP(2)">page2</span>
      <!-- <div class="navigation">
        <div class="navigation-title">中央后台系统</div>
        <div class="navigation-item">
          <div v-for="(item, index) in routeList" :key="index">
          <div class="navigation-subtitle" @click="handleSumbitIcon(item)">
            <span>{{item.label}}</span>
            <i :class="item.show ? 'el-icon-arrow-down' : 'el-icon-arrow-up'"></i>
          </div>
              <div
                class="navigation-child"
                :style="`height:${item.show ? 40*item.child.length: 0}px`"
              >
                <div
                  v-for="(items, index1) in item.child"
                  :key="index1"
                  @click="handleClickItem(items)"
                  :class="items.name === $route.name ? 'navigation-active' : ''"
                  class="navigation-child-hover"
                >
                  {{ items.label }}
                </div>
              </div>
          </div>
        </div>
      </div> -->
    </div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-if="$route.meta.name !== '首页'">{{$route.meta.name}}</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- <keep-alive> -->
      <!-- name 定义类名.fade-xxx 开头 默认v-xxx开头 -->
      <!-- appear 首次渲染就使用动画 -->
      <!-- mode 默认in-out 先进后出(缺点 两个节点同时存在) / out-in 先出 后进 -->
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
      <!-- <router-view /> -->
    <!-- </keep-alive> -->
    <!--  -->
  </div>
</template>
<script>
import MyRoute from '../src/router/routes'
import cookie from 'js-cookie'
console.log('cookie', cookie);
cookie.set('token', 'ox8ddssanwf8511d111',{'expires': 30})
setTimeout(()=> {
  console.log(cookie.get('token'));
},5000)
console.log('route',MyRoute)
export default {
  name: "Navigation",
  data() {
    return {
      show: false,
      routeList: [
        {
          label: "商户管理",
          show: true,
          child: [
            {
              label: "我的名字",
              route: "/my",
              name: "My",
            },
            {
              label: "我的1",
              route: "/file",
              name: "File",
            },
          ],
        },
        { 
          label: "商户管理2",
          show: false,
          child: [
            {
              label: "我的名字",
              route: "/my1",
              name: "My1",
            },
            {
              label: "我的1",
              route: "/file1",
              name: "File1",
            },
                        {
              label: "我的名字",
              route: "/my1",
              name: "My1",
            },
            {
              label: "我的1",
              route: "/file1",
              name: "File1",
            },
                        {
              label: "我的名字",
              route: "/my1",
              name: "My1",
            },
            {
              label: "我的1",
              route: "/file1",
              name: "File1",
            },
          ],

        },
        { 
          label: "商户管理3",
          show: false,
          child: [
            {
              label: "我的名字",
              route: "/my1",
              name: "My1",
            },
            {
              label: "我的1",
              route: "/file1",
              name: "File1",
            },
                        {
              label: "我的名字",
              route: "/my1",
              name: "My1",
            },
            {
              label: "我的1",
              route: "/file1",
              name: "File1",
            },
                        {
              label: "我的名字",
              route: "/my1",
              name: "My1",
            },
            {
              label: "我的1",
              route: "/file1",
              name: "File1",
            },
          ],

        },
        { 
          label: "商户管理4",
          show: false,
          child: [
            {
              label: "我的名字",
              route: "/my1",
              name: "My1",
            },
            {
              label: "我的1",
              route: "/file1",
              name: "File1",
            },
                        {
              label: "我的名字",
              route: "/my1",
              name: "My1",
            },
            {
              label: "我的1",
              route: "/file1",
              name: "File1",
            },
                        {
              label: "我的名字",
              route: "/my1",
              name: "My1",
            },
            {
              label: "我的1",
              route: "/file1",
              name: "File1",
            },
          ],

        }
      ],
    };
  },
  watch:{
    $route(to,from) {
      console.log(to);
      console.log(from)
    }
  },
  mounted() {
    console.log(process.env);
    // 假设后端给的权限ID
    const arr = ['1','3','4','5','6','7']
    // 对路由表进行筛选
    const newRoute = MyRoute.filter(item => arr.indexOf(item.meta.id) > -1 )
    console.log('newRoute', newRoute);
    // addRoutes 已经被废弃
    // this.$router.addRoutes(...MyRoute)
    newRoute.forEach(item => {
      this.$router.addRoute(item)
    })
    // 最后在添加 访问不存在的页面 否则刷新一上来就404
    const a = {
    path: '*',
    name: '404',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/404.vue')
    }
   this.$router.addRoute(a)
  },
  methods: {
    handleP(val) {
      this.$router.push({
        name: 'Page',
        query: {
          a: val
        }
      })
    },
    handleSumbitIcon(item) {
      item.show = !item.show;
    },
    handleClickItem(payload) {
      // console.log(payload);
      if (this.$route.name != payload.name) {
        this.$router.push({ name: payload.name });
      } else {
        console.log("别重复点击");
      }
    },
  },
};
</script>
<style scoped lang='scss'>
.navigation {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  // height: 100vh;
  width: 300px;
  font-family: KaiTi;
  // min-height: 100vh;
  background: #ccc;
  &-title {
    font-size: 26px;
    width: 100%;
    height: 70px;
    line-height: 70px;
    text-align: center;
    border-bottom: 1px solid;
  }
  &-item{
    position: absolute;
    overflow: auto;
    width: 100%;
    height: 100%;
  }
  &-subtitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    padding: 0 15px;
    font-size: 24px;
    height: 50px;
  }
  &-child {
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    text-indent: 40px;
    overflow: hidden;
    transition: all 0.6s;
    & > div {
      height: 40px;
      line-height: 40px;
      font-size: 20px;
      cursor: pointer;
      &:hover{
        background: #434a50;
        // color: #FFF;
        transition: all .4s;
      }
    }
  }
  &-active {
    width: 100%;
    box-sizing: border-box;
    background: #434a50;
    border-right: 10px solid #24292e;
    color: #ffd04b;
    transition: all .6s;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: 0.5s ease;
}
// .fade-enter {
//   transform: translateX(100%);
// }
 .fade-enter, .fade-leave-to {
  opacity: 0;
  // transform: translateX(-100%);
}
.fade-enter-to, .fade-leave{
  opacity: 1;
  // transform: translateX(0);
}

</style>
