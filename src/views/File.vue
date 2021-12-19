<template>
    <div>
       <Btn placeholder='shj' @change="handleChange"/>
       <Edit style="width:400px;" v-model="value" />
    </div>
</template>
<script>
import Btn from '../components/btn.vue'
// import Edit from '../components/Edit.vue';
export default {
    components:{Btn},
    data(){
        return {
            value:''
        }
    },
    watch:{
        value:{
            handler(val){
                console.log(val);
            }
        }
    },
    methods:{
        handleChange(val){
            console.log(val);
        }
    }
}
</script>