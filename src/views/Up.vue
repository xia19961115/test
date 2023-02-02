<!--
 * @Description: 
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2023-02-01 14:23:30
 * @LastEditTime: 2023-02-02 11:59:34
-->
<template>
    <div>
        <el-button type="primary" size="mini" @click="handleClick">按钮</el-button>
        <el-button type="primary" size="mini" @click="handleOver">清除</el-button>
        <!-- <message></message> -->
    </div>
</template>
<script>
// import Message from '../components/Message.vue'
import msg from './up'
export default {
    // components: {Message},
    methods:{
        handleClick() {
            msg('牛逼')
        },
        handleOver() {
            // console.log(msg);
            msg.clear()
        }
    }
}
</script>