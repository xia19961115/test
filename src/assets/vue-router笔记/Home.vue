<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- 在对应的父组件写路由 -->
    <router-link to="/home/news">新闻</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios';
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  created(){
    this.getls()
  },
  methods:{
    getls(){
      axios({url:'http://h5sm.com/flutter/api/subLiveList'})
      .then((res)=>{console.log(res);})
    }
  },
}
</script>
