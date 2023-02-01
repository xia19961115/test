<!--
 * @Description: 
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2023-02-01 15:22:16
 * @LastEditTime: 2023-02-01 17:06:47
-->
<template>
    <div class="msg">
        <div class="msg-content">
            {{options.text}}
        </div>
    </div>
</template>
<script>
export default {
    name: 'Message',
    data() {
        return {
            options:{
                text: '签到成功',
                duration: 2000
            }
        }
    },
    methods:{
        handleClose() {},
        clear() {}
    }
}
</script>
<style lang="scss" scoped>
.msg{
    width: 100vw;
    height: 100vh;
    // background: rgba(0,0,0,0.6);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    &-content{
        width: 300px;
        min-height: 30px;
        box-sizing: border-box;
        border-radius: 10px;
        padding: 10px;
        line-height: 20px;
        text-align: center;
        color: #fff;
        background: #000;
    }
}
</style>
