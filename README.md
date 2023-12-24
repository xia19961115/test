## transition组件
1. v-enter
2. v-enter-active
3. v-enter-to
4. v-leave
5. v-leave-active
6. v-leave-to


### 进入的情况

v-enter(进入的状态)  →→→   v-enter-to(active 结束后的状态)
→    v-enter-active(进入后 到结束的时间 )    →

初始状态 (opacity: 0)    →→→  结束状态 (opacity: 1)

第一次渲染的时候会给元素添加 enter 类名
到达下一渲染帧的时候 移除 enter 类名
添加 enter-active 和 enter-to 类名

可以理解成 enter的时候不希望看到, 到 enter-active 和 enter-to 呈现效果

由于受到 enter-active  可以添加过度效果

### 退出的情况

v-leave →→→   v-leave-to
→    v-leave-active    →

初始状态 (opacity: 1)    →→→  结束状态 (opacity: 0)

当节点移除时候会给元素添加 leave 类名 
到达下一渲染帧的时候 移除 leave 类名
添加 leave-active 和 leave-to 类名