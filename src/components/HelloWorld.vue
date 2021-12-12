<template>
  <div>
    <div>?????</div>
    <div @click="add">{{price}}</div>
    <div>{{nice}}</div>
    <div>{{name}}</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  model:{
    prop:'price',
    event:'addChange'
  },
  props:{
    price:Number,
    nice:{
      type:[String, Number],
      default:0
    },
    name:{
      type:String
    }
  },
  methods:{
    add(){
      this.$emit('addChange',this.price+1)
    }
  }
}
</script>
