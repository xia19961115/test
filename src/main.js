import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import * as echarts from 'echarts'
Vue.use(echarts)
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.component('Edit',()=>import('./components/Edit.vue'))

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
