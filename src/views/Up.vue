<!--
 * @Description: 
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2023-02-01 14:23:30
 * @LastEditTime: 2023-05-04 14:51:37
-->
<template>
    <div>
        <el-button type="primary" size="mini" @click="handleClick">按钮</el-button>
        <el-button type="primary" size="mini" @click="handleOver">清除</el-button>
        <div>{{list}}</div>
        <div>
            <el-button type="primary" @click="change">改变</el-button>
        </div>
        <view-picture :src="pic" v-resize="sizeChange"/>
        <view-picture :src="pic1" />
    </div>
</template>
<script>
import ViewPicture from '../components/viewPicture.vue'
import msg from './up'
export default {
    components:{ViewPicture},
    data: () =>({
      list: [1,2,3],
      pic: require('../assets/1.jpg'),
      pic1: require('../assets/2.jpg')
    }),
    methods:{
        handleClick() {
            msg('牛逼')
        },
        handleOver() {
            msg.clear()
        },
        change() {
            // 等同于 this.$set()
            this.list[0] = 5
            this.$forceUpdate()
        },
        sizeChange(val) {
            console.log(val);
        }
    },
}
</script>