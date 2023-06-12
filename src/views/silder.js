const keyframes = [
    {
        transform: `translateY(${30}px)`,
        opacity: 0.3,
        // offset: 0.6
    },
    {
        transform: `translateY(0)`,
        opacity: 1
    }
]
const option = {
    duration: 1000,
    // fill: 'forwards',
    easing: 'ease'
}

const ob = new IntersectionObserver(entries => {
    for(const entry of entries) {
        if (entry.isIntersecting) {
            const animation = animationMap.get(entry.target)
            animation.play()
            ob.unobserve(entry.target)
        }
    }
})
const isBelowViewport = (el) => {
    const rect = el.getBoundingClientRect()
    return rect.top > window.innerHeight
}
const animationMap = new WeakMap()
export default {
    inserted(el,binding) {
        if (!isBelowViewport(el)) return
        const animation = el.animate(keyframes,option)
        animation.pause()
        animationMap.set(el, animation)
        ob.observe(el)
    },
    unbind(el) {
        // el.getAnimations().forEach(item => item.cancel())
        ob.unobserve(el)
    }
}
// 某个元素
// const keyframes = [
//     {
//         transform: `translateY(${30}px)`,
//         opacity: 0.3,
//         // offset: 0.6
//     },
//     {
//         transform: `translateY(0)`,
//         opacity: 1
//     }
// ]
// const option = {
//     duration: 1000,
//     // fill: 'forwards',
//     easing: 'ease'
// }
// const dom = document.querySelector('#c')
// const ob = new IntersectionObserver(entries => {
//     for(const entry of entries) {
//         if (entry.isIntersecting) {
//             const animation = animationMap.get(entry.target)
//             animation.play()
//             ob.unobserve(entry.target)
//         }
//     }
// },{
//     root: dom
// })
// const isBelowViewport = (el) => {
//     const rect = el.offsetTop
//     console.log(rect);
//     return rect > document.querySelector('#c').clientHeight
// }
// const animationMap = new WeakMap()
// export default {
//     inserted(el,binding) {
//         if (!isBelowViewport(el)) return
//         const animation = el.animate(keyframes,option)
//         animation.pause()
//         animationMap.set(el, animation)
//         ob.observe(el)
//     },
//     unbind(el) {
//         // el.getAnimations().forEach(item => item.cancel())
//         ob.unobserve(el)
//     }
// }