import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueLazyLoad from 'vue-lazyload'
import axios from 'axios'
import * as echarts from 'echarts'
Vue.use(echarts)
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$axios = axios
const Bus = new Vue()
Vue.prototype.$bus =Bus
Vue.use(VueLazyLoad,{
  preload:1.3,//预加载的宽高,
  loading:require('./assets/loading.gif'), // img的加载中的显示的图片的路径
  attempt:3,//尝试加载的次数
  listenEvents:['scroll','wheel','mousewheel','resize','animationend','transitionend','touchmove'], //你想让vue监听的事件
})
Vue.component('Edit',()=>import('./components/Edit.vue'))

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
