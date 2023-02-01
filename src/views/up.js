/*
 * @Description: 
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2023-02-01 15:42:10
 * @LastEditTime: 2023-02-01 19:15:41
 */
import Vue from "vue";
import Message from '../components/Message.vue'
let msgConstructor = Vue.extend(Message)
let msgDom = null
let timer = null
export function msg(option) {
    // 如果节点存在不创建
    if (msgDom) return
    msgDom = new msgConstructor({
        el: document.createElement('div')
    })
    msgDom.options = {...msgDom.options, ...option}
    document.body.appendChild(msgDom.$el);
    timer = setTimeout(() => {
        msgDom.$el.remove()
        msgDom = null // 手动清除标记
        clearTimeout(timer)
    }, msgDom.options.duration);
    msgDom.clear = function() {
        msgDom.$el.remove()
        msgDom = null // 手动清除标记
        clearTimeout(timer)
    }
    // console.log(callback);
    // msgDom.handleClose = function() {
    //     // console.log('ccccc');
    //     callback && callback(() => {
    //         console.log('789');
    //     })
    //     msgDom.$el.remove()
    //     msgDom = null // 手动清除标记
    // }
}