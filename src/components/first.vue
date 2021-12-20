<template>
    <div>
        {{name}}
    </div>
</template>
<script>
export default {
    name:'First',
    data(){
        return{
            name:'zhangsan'
        }
    },
    created() {
        this.$bus.$on('aaa',(e)=>{
            console.log(this);
            this.name = e
        })
    }
}
</script>