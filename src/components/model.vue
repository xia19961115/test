<!--
 * @Description: 
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2022-06-05 19:32:14
 * @LastEditTime: 2022-10-26 16:14:02
-->
<template>
    <div>
        <p @click="handleClick">{{value}}</p>
    </div>
</template>
<script>
export default {
    name:'Model',
    data(){
        return{
            // time:this.checked
        }
    },
    props:{
        value:{
            type:Number
        }
    },
    created(){
       
    },
//     model: {
//     prop: 'checked',
//     event: 'change'
//   },
  methods:{
      handleClick(){
        this.back()
        // let count = 0
        // return function() {
        //     count ++
        //   console.log('model',this.checked);
        //   this.$emit('change',count)
        // }
        // count ++
        // //   console.log('model',this.checked);
        //   this.$emit('change',count)
      },
      // vue闭包的写法
      back: (function(){
        let count = 0
        return function() {
          count ++
          console.log('model',this.checked);
          this.$emit('input',count)
        }
      })()
  }
}
</script>
<style scoped lang='scss'>
div>p{
    width: 100%;
    text-align: center;
}
</style>