<template>
    <div>
       <Btn placeholder='shj' @change="handleChange"/>
    </div>
</template>
<script>
import Btn from '../components/btn.vue'
export default {
    components:{Btn},
    methods:{
        handleChange(val){
            console.log(val);
        }
    }
}
</script>