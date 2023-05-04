/*
 * @Description: 
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2023-05-04 14:19:47
 * @LastEditTime: 2023-05-04 14:43:44
 */
const map = new WeakMap() // 创建映射关系
const ob = new ResizeObserver(items => {
    for (const item of items) {
        // console.log(item);
        const handler = map.get(item.target)
        if (handler) {
            const box = item.borderBoxSize[0]
            handler({
                with: box.inlineSize, // 宽度
                height: box.blockSize // 高度
            })
        }
    }
})
export const resize = {
    bind(el,binding) {
        ob.observe(el)
        // 创建映射关系
        map.set(el, binding.value)
    },
    unbind(el) {
        ob.unobserve(el)
    }
}
