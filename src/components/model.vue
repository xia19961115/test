<template>
    <div>
        <p @click="handleClick">{{checked}}</p>
    </div>
</template>
<script>
export default {
    name:'Model',
    data(){
        return{
            time:this.checked
        }
    },
    props:{
        checked:{
            type:Number
        }
    },
    created(){
       
    },
    model: {
    prop: 'checked',
    event: 'change'
  },
  methods:{
      handleClick(){
          console.log('model',this.checked);
          this.$emit('change',this.time++)
      }
  }
}
</script>
<style scoped lang='scss'>
div>p{
    width: 100%;
    text-align: center;
}
</style>