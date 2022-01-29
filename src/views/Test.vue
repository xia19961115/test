<template>
    <div>
        <div>123211232</div>
        <Model v-model="name" @change='handle' @click="handle1"/>
        <div style="height:800px">1</div>
        <div style="height:600px" id="item">2</div>
    </div>
</template>
<script>
import Model from '@/components/model';
export default {
    components:{Model},
    data(){
        return{
            name:1
        }
    },
    mounted(){
        console.log('--------',this.$router.currentRoute);
        console.log(this.$route);
        this.$nextTick(()=>{
            document.getElementById('item').scrollIntoView()
        })
    },
    methods:{
        handle(e){
            console.log(e);
        },
        handle1(){
            console.log('e123');
        }
    }
    
}
</script>