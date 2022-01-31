/**
    tab滚动bar组件
 */
<template>
    <div class="bar">
        <div class="bar-title" 
        :class="active===index? 'active': '' "
        :style="`width:calc(100% / ${list.length})`"
        @click="handleClick"
        :data-item="index"
        v-for="(item,index) in list" 
        :key="index">
            {{item}}
        </div>
        <div class="bar-line"
        :style="`
        width:calc(100% / ${list.length});
        transform: translate(${active===0 ? 0 : 100*active}%);`"
        ></div>
    </div>
</template>
<script>
export default {
    name:'Bar',
    data() {
        return {
            active:0,
            list:['测试1','测试2','测试3','测试4']
        }
    },
    methods:{
       handleClick(e) {
           console.log(e.currentTarget.dataset);
        if( Number(e.currentTarget.dataset.item) === this.active ) return
        this.active = Number(e.currentTarget.dataset.item)
        console.log(this.active);
       } 
    }
}
</script>
<style lang="scss" scoped>
.bar{
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    position: relative;
    display: flex;
    align-items: center;
    &-title{
        height: 50px;
        text-align: center;
        line-height: 50px;
    }
    .active{
        transition: 1s all;
        color: red;
    }
    &-line{
       position: absolute;
       height: 1px;
       bottom: 0;
       left: 0;
       background-color: red;
       transition: all 1s;
    }
}
</style>