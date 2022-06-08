<template>
    <div class="file" ref='vantaRef'>
       <!-- <Btn placeholder='shj' @change="handleChange"/>
       <Edit style="width:400px;" v-model="value" /> -->
    </div>
</template>
<script>
// import Btn from '../components/btn.vue'
// import Edit from '../components/Edit.vue';
import * as THREE from 'three'
import BIRDS from 'vanta/src/vanta.fog'
// console.log(THREE);
export default {
    // components:{Btn},
    data(){
        return {
            value:'',
            vantaEffect: null
        }
    },

  mounted() {
    this.vantaEffect = BIRDS({
      el: this.$refs.vantaRef,
      THREE: THREE,
    })
    this.vantaEffect.setOptions({
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00
    })
  },
  beforeDestroy() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy()
    }
    // watch:{
    //     value:{
    //         handler(val){
    //             console.log(val);
    //         }
    //     }
    // },
    // methods:{
    //     handleChange(val){
    //         console.log(val);
    //     }
  }
}
</script>
<style scoped>
 .file{
     width: 100vw;
     height: 100vh;
 }
</style>