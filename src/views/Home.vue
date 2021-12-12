<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld v-model="price" v-bind="{nice,name}"/>
    <div @click="handleADD">父组件的{{price}}</div>
    <div :class="isTrue?'red':''" :style="`fontSize:${size}px`">daaa</div>
    {{arr}}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  created(){
    console.log(process.env.NODE_ENV);
    this.handleTime()
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
