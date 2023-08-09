<!--
 * @Description: '无限滚动列表'
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2023-08-09 15:39:27
 * @LastEditTime: 2023-08-09 17:16:54
-->
<template>
  <div class="recycle_scroll-container" @scroll="setPool" ref="dom">
    <div class="recycle_scroll-wrapper" :style="{height: totalHeight + 'px'}">
        <!-- <slot></slot> -->
        <div
          class="recycle-scroller-item"
          v-for="itemPool in pool"
          :key="itemPool.item[defaultKey]"
          :style="{
            transform: `translateY(${itemPool.position}px)`,
          }"
        >
            <slot :item="itemPool.item"></slot>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'RecycleScroller',
    props: {
        // 数组数据
        item: {
            type:Array,
            default: () => []
        },
        // 每条数据的高度
        itemSize: {
            typeof: Number,
            default: 0
        },
        defaultKey: {
            typeof: String,
            default: 'id'
        }
    },
    computed:{
        totalHeight() {
            return this.itemSize * this.item.length
        }
    },
    data() {
        return {
            // { item: 原始数据, position: 该数据对应的偏移位置 }
            pool: [] // 数据池
        }
    },
    mounted() {
        this.setPool()
        console.log(this.pool);
        window.vm = this
    },
    methods: {
        setPool() {
            // 开始的下标(页面滚去的高度 / 每条数据的高度)
            let startIndex = Math.floor(this.$refs.dom.scrollTop / this.itemSize)
            console.log(startIndex, 'startIndex');
            // 结束的下标(页面滚去的高度+ 外层容器的高) / 每条数据的高度
            let endIndex = Math.ceil((this.$refs.dom.clientHeight + this.$refs.dom.scrollTop) / this.itemSize)
            console.log(endIndex, 'endIndex');
            // 设置起始 高度(开始下标 * 每条数据的高度)
            let startHeight = startIndex * this.itemSize
            this.pool = this.item.slice(startIndex, endIndex).map((it, i) =>({
                item:it,
                position: startHeight + i * this.itemSize
            }))
        }
    }
}
</script>

<style lang="scss" scoped>
.recycle_scroll-container{
    overflow: auto;
}
.recycle_scroll-wrapper{
    position: relative;
}
.recycle-scroller-item {
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
}
</style>