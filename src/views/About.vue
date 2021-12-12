<template>
  <div class="about">
    <!-- <h1>This is an about page</h1> -->
    <div class="navigation">
      <div class="navigation-title">
        中央后台系统
      </div>
      <div class="navigation-subtitle" @click="handleSumbitIcon">
        <span>我的工作台</span>
        <i :class="show?'el-icon-arrow-down':'el-icon-arrow-up'"></i>
      </div>
      <el-collapse-transition>
        <div v-show="show">
          <div class="navigation-child" :style="`height:${show?90 : 0}px`">
            <div v-for="(item,index) in list" :key='index' @click="handleClickItem(item)" :class="item.name===$route.name?'navigation-active':''">{{item.title}}</div>
          </div>
        </div>
      </el-collapse-transition>
    </div>
  </div>
</template>
<script>
export default {
  name:'Navigation',
  data(){
    return{
      show:false,
      list:[
        {
        title:'我的名字',
        router:'/my',
        name:'My'
      },
      {
        title:'我的1',
        router:'/file',
        name:'File'
      }
      ]
    }
  },
  created(){
    console.log(this.$route.name);
  },
  methods:{
    handleSumbitIcon(){
      this.show = !this.show
    },
    handleClickItem(payload){
      console.log(payload);
      this.$router.push({name:payload.name})
    }
  }
}
</script>
<style scoped lang='scss'>
.navigation{
  width: 300px;
  height: 100vh;
  background: #ccc;
  &-title{
    font-size: 26px;
    width: 100%;
    height: 70px;
    line-height: 70px;
    text-align: center;
    border-bottom: 1px solid;
  }
  &-subtitle{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    padding: 0 15px;
    height: 50px;
  }
  &-child{
    display: flex;
    // align-items: center;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    text-indent: 40px;
    transition: all .3s;
    &>div{
      height: 30px;
      line-height: 30px;
      cursor: pointer;
    }
  }
  &-active{
    width: 100%;
    background: #f00;
    color:royalblue
  }
}
</style>