<template>
  <div>
    <!-- $listeners 监听所有父组件上绑定的事件 -->
    <S v-on="{
        ...$listeners
    }"/>
  </div>
</template>

<script>
import S from './s.vue'
export default {
    components: {S},
    methods:{
        /**
         *  v-on= {} 可以绑定多个事件
         *  $listeners 监听父组件的事件, 所有的事件函数都做过特殊的处理
         */
        handleSub() {
            this.$emit('submit')
        }
    }
}
</script>

<style>

</style>