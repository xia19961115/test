/*
 * @Description: 
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2022-10-26 15:52:43
 * @LastEditTime: 2023-05-04 14:18:46
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueLazyLoad from 'vue-lazyload'
import axios from 'axios'
import * as echarts from 'echarts'
import 'nprogress/nprogress.css'
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
Vue.component('Bottom',()=>import('@/components/Botton'))
// 全局自定义指令
Vue.directive('h1',{
  inserted:function(el, binding, vNode) {
    // el.style.color = 'red'
    console.log(el) // 获取的节点
    console.log(binding) // 获取到的值
    console.log(vNode) // 虚拟节点
    if (binding.value === 123) {
      el.style.color = 'red'
    }
    el.addEventListener('input',function (e) {
      console.log(e.target.value);
      e.target.value =e.target.value.replace(/[^\d]/g,'').replace(/^0{1,}/g,'')
      if (e.target.value > 20) {
        e.target.value =20
      }
    })
  }
})
// 自动引入指令
// 自定义指令
Vue.use((Vue) => {
  ((requireContext) => {
    const arr = requireContext.keys().map(requireContext);
    (arr || []).forEach((directive) => {
      directive = directive.__esModule && directive.default ? directive.default : directive
      Object.keys(directive).forEach((key) => {
        Vue.directive(key, directive[key])
      })
    })
  })(require.context('./directive', false, /^\.\/.*\.js$/))
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
