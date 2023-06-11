<template>
    <div>
        <div class="box" v-silder:3000 v-for="item in 10" :key="item">
            {{item}}
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
    .box{
        width: 70%;
        height: 200px;
        text-align: center;
        line-height: 200px;
        border: 2px solid;
        margin: 0 auto 20px;
    }
</style>