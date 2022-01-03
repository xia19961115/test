<template>
    <div>
        <div>123211232</div>
        <Model v-model="name" @change='handle' @click="handle1"/>
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