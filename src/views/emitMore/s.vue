<!--
 * @Description: 
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2023-07-23 10:03:31
 * @LastEditTime: 2023-07-23 10:23:49
-->
<template>
  <div>
    <el-button type="primary" @click="handleS">点击</el-button>
  </div>
</template>

<script>
export default {
    name: 'S',
    data() {
        return {
            smle: 'sa'
        }
    },
    methods:{
        // 孙组件 也爷 组件传递的时候   父组件可以写$listeners  孙组件emit事件冒泡出去
        handleS() {
            this.$emit('submit', () => {
                console.log(this);
            })
        }
    }
}
</script>

<style>

</style>