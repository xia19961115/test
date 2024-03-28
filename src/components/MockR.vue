<!--
 * @Description: 
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2024-03-28 15:28:25
 * @LastEditTime: 2024-03-28 15:47:04
-->
<template>
    <div>
        <div @click="handle">123</div>
    </div>
</template>

<script>
export default {
    name: 'MockR',
    props:{
        mes: Function
    },
    methods:{
        handle() {
            this.mes(123)
            // this.$emit('acc', 123)
        }
    }
}
</script>
