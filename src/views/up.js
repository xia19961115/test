/*
 * @Description: 
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2023-02-01 15:42:10
 * @LastEditTime: 2023-02-02 12:02:56
 */
import Vue from "vue";
import Message from '../components/Message.vue'
let msgConstructor = Vue.extend(Message)
let msgDom = null
let timer = null
// export function msg(option) {
//     // 如果节点存在不创建
//     if (msgDom) return
//     msgDom = new msgConstructor({
//         el: document.createElement('div')
//     })
//     msgDom.options = {...msgDom.options, ...option}
//     document.body.appendChild(msgDom.$el);
//     timer = setTimeout(() => {
//         msgDom.$el.remove()
//         msgDom = null // 手动清除标记
//         clearTimeout(timer)
//     }, msgDom.options.duration);
// }
const msg  = function(options) {
    if (msgDom) return
    options = options || {};
    if (typeof options === 'string') {
        options = {
          message: options
        };
    }
    msgDom = new msgConstructor({
        el: document.createElement('div')
    })
    msgDom.options = {...msgDom.options, ...options}
    document.body.appendChild(msgDom.$el);
    timer = setTimeout(() => {
        msgDom.$el.remove()
        msgDom = null // 手动清除标记
        clearTimeout(timer)
    }, msgDom.options.duration);
    return msg
}
msg.clear = () => {
    if (!msgDom) return
    msgDom.$el.remove()
    msgDom = null // 手动清除标记
    clearTimeout(timer)
}
export default msg