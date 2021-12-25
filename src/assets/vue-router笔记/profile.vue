<template>
    <div>
        <h2>档案</h2>
        <p>{{$route.query}}</p>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    created(){
        console.log(this.$route)
    }
}
</script>