<template>
  <div id="app">
    <div id="nav">
      <!-- link 里的属性 
      1.to='/home' 跳转到那个页面
      2.有tag 制定标签类型如tag="button"
      3.repalce  不能利用浏览器的左右来回   默认是可以的
      4.active-class="active" 表示处于活跃状态的router-link标题添加 active标签
      也可以在router全局中设置 linkActiveClass:'active'
      5.如果不用router-link标签可以用代码方式实现
      this.$router.push('/about')进行跳转
      this.$router.replace()跳转,但是不用使用浏览器的左右来回,用的少
      -->


      <!-- 动态路由(如/my/myid)
      1.给路由设置后面加上动态参数(如/my/:id)
      2.路由跳转传递id(:to="'/my/'+id")
      3.到对应的页面接受参数 this.$route.params.id
      //route 表示处于活跃的路由 params是上面的一个方法
      // params后面的参数 是你在路由设置里的参数,我在路由中设置id,就要用id来取
      -->


      <!-- 路由嵌套(在一个理由页面嵌套了其它的路由 比如我在Home路由下还有一个news路由 /home/news)
      1.在对应的路由下面添加children[{}]路由配置, 在对应的页面里设置router link view标签
      2.注意给子路由path 不用加/
      3.重定向到 默认子路 path:'' , redirect:'news',
      -->

      <!-- 路由参数传递
      两种方式 
      1.params  看上面的动态路由(一般传递简单参数 /id/yunmu)
        代码方式传递  this.$router.push('/my/'+this.id)
      2.query(可以传递一个对象 url后面会有?name=xiyan&age=18形式) 
      代码的方式传递  
      this.$router.push({
          path:'/profile',
          query:{
            name:this.nickname,
            age:18,
          }
      })
      -->
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link :to="'/my/'+id">我的主页</router-link>|
      <router-link :to="{path:'/profile', query:{name:nickname,age:18}}">档案</router-link>
      <!-- <button @click="hanleto">档案</button> -->
    </div>
    <!-- 一个占位,点击对应的router 渲染对应的组件 -->
    <router-view/>


    <!--
        this.$set  可以修改/添加对象 数组 三个参数(这个对象/组数,属性名/索引,值 ) 
        this.$delete 可以删除对象/数组 的某个值 两个参数(这个对象/数组,属性名/索引)
    -->
  </div>
</template>
<script>
export default {
   data(){
     return{
       id:'yumu',
       nickname:'xiyan'
     }
   },
   methods:{
    //  hanleto(){
    //    this.$router.push({
    //       path:'/profile',
    //       query:{
    //         name:this.nickname,
    //         age:18,
    //       }
    //   })
    //  }
   },
}
</script>

<style>


/* 
  处于活跃的router-link可以添加样式
  .router-link-active{}
 */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
