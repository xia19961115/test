import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import mylist from './components/mylist.vue'
Vue.use(VueAxios, axios)
Vue.use(ElementUI);

Vue.config.productionTip = false

Vue.component("mylist",mylist)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
