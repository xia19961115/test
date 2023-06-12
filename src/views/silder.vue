<!--
 * @Description: 
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2023-06-12 10:23:57
 * @LastEditTime: 2023-06-12 10:42:44
-->
<template>
    <div>
        <div id="c">
            <div class="box" v-silder:3000 v-for="item in 10" :key="item">
                {{item}}
            </div>
        </div>
    </div>
</template>
<script>
import silder from './silder'
export default {
    directives:{
        silder
    }
}
</script>
<style lang="scss" scoped>
    #c{
        width: 200px;
        height: 500px;
        margin: 0 auto;
        overflow: hidden scroll;
        position: relative;
    }
    .box{
        width: 70%;
        height: 200px;
        text-align: center;
        line-height: 200px;
        border: 2px solid;
        margin: 0 auto 20px;
    }
</style>