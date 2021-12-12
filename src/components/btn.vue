<template>
    <div>
        <el-input
        v-model="a"
        v-bind="$attrs" 
        v-on="$listeners">
         <i slot="prefix" class="el-input__icon el-icon-search" /></el-input>
    </div>
</template>
<script>
export default {
    name:'Btn',
    created(){
        console.log(this.$attrs);
        console.log('this.$listeners',this.$listeners);
    },
    data(){
        return{
            a:''
        }
    }
}
</script>