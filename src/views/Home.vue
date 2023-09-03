<!--
 * @Description: 
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2022-10-26 15:52:43
 * @LastEditTime: 2023-09-03 11:09:00
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld v-model="price" v-bind="{nice,name}"/>
    <div @click="handleADD">父组件的{{price}}</div>
    <div :class="isTrue?'red':''" :style="`fontSize:${size}px`">daaa</div>
    {{arr}}
    <Bottom
      @hook:mounted="handleMounted"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import SparkMD5 from 'spark-md5';

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  created(){
    console.log(process.env.NODE_ENV);
    this.handleTime()
  },
  mounted() {
    console.log('first');
    console.log(SparkMD5);
    // 等同于 beforeDestroy生命周期函数-
    this.$once('hook:beforeDestroy', () => {
      console.log('组件卸载', this)
    })
  },
  data(){
    return{
      price:100,
      nice:17,
      name:'yunmu',
      isTrue:true,
      size:28,
      arr:[0,2,3,1,6],
      timer:null,
    }
  },
  methods:{
    handleADD(){
      this.price+=2
    },
    handleMounted() {
      // 执行顺序 子组件的 mounted > @hook:mounted > 父组件的 mounted
      console.log('77777');
    },
    handleTime(){
      let num = 0
      this.timer = setInterval(()=>{
        if(num > 3) {
          clearInterval(this.timer)
          num = 0
          this.arr =[0,0,0,0,0]
          this.handleTime()
        } else{
          this.arr.forEach((item,index)=>{
            if(item > 8){
              this.$set(this.arr,index,0)
            } else{
              this.$set(this.arr,index,item + (parseInt(Math.random() * 11) -5))
            }
          })
        }
        num ++
      },1000)
    }
  }
}
</script>
<style scoped>
.red{
  color: red;
}
</style>
