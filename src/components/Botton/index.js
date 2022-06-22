import Bottom from './index.vue'
import './index.scss'
Bottom.install = function(Vue){
    console.log('---',Bottom.name);
    Vue.component(Bottom.name, Bottom);
}
export default Bottom