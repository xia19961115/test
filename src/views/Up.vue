<!--
 * @Description: 
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2023-02-01 14:23:30
 * @LastEditTime: 2023-02-01 17:20:44
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
import {msg} from './up'
export default {
    // components: {Message},
    methods:{
        handleClick() {
            msg({text: '牛逼',duration: 5000})
        },
        handleOver() {
            console.log(msg);
        }
    }
}
</script>