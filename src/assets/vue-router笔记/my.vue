<template>
    <div>
        <h1>这个是我的主页</h1>
        <p>{{tickName}}</p>
        <p>{{getuser}}</p>
    </div>
</template>

<script>
import{mapState,} from 'vuex'
export default {
    name:'my',
    data(){
        return{

        }
    },
    created(){
        console.log(this.$route);
    },
    computed:{
        ...mapState(['tickName']),
        getuser(){
            //route 表示处于活跃的路由 params是上面的一个方法
            // params后面的参数 是你在路由设置里的参数,我在路由中设置id,就要用id来取
            return this.$route.params.id
        }
    }
}
</script>

<style lang="sass" scoped>

</style>