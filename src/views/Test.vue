<template>
    <div>
        <div>123211232</div>
        <Model v-model="name" @change='handle' @click="handle1"/>
        <div style="height:800px">1</div>
        <div style="height:600px" id="item">2</div>
        {{myname}}
        <div>{{list('789')}}</div>
        <img v-lazy="anyList1">
        <img v-lazy="anyList2">
        <img v-lazy="anyList3">
        <img v-lazy="anyList4">
    </div>
</template>
<script>
import Model from '@/components/model';
export default {
    components:{Model},
    data(){
        return{
            name:1,
            myname:'a',
            anyList1:require('@/assets/1.jpg'),
            anyList2:require('@/assets/2.jpg'),
            anyList3:require('@/assets/3.jpg'),
            anyList4:require('@/assets/4.jpg')
        }
    },
    mounted(){
        console.log('--------',this.$router.currentRoute);
        console.log(this.$route);
        this.$nextTick(()=>{
            this.list ='123'
            document.getElementById('item').scrollIntoView()
        })
    },
    computed:{
        list:{
            get() {
                return (val) =>{
                    return val+'66666'
                }
            },
            set(val) {
                this.myname =val
                console.log(this.myname);
            }
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