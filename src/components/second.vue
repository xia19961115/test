<template>
    <div>
        <el-button @click="handleClick">点击</el-button>
    </div>
</template>
<script>
export default {
    name:"Second",
    methods:{
        handleClick() {
            this.$bus.$emit('aaa', '李四')
        }
    }
}
</script>