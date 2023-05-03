<template>
    <div>
        <img 
        :style="{
            heigt:height,
            width:width
        }"
        :src="src"
        @click="preview(1, $event)"
        >
        <div v-if="previewVisibleStatus === 1 || previewVisibleStatus === 2">
            <div @click="preview(2,$event)" class="view_box"></div>
            <img 
                ref="pic" 
                class="view_picture"
                :class="{
                    'active': (previewStatus === 3 && previewVisibleStatus === 1) || previewVisibleStatus === 2
                }"
                :style="{
                   transform: previewStatus === 2 || previewVisibleStatus === 2
                    ? `translate3d(${previewFirstRect[0] - previewLastRect[0]}px, ${previewFirstRect[1] - previewLastRect[1]}px, 0) scale(${scaleValue})`
                    : 'translate3d(0, 0, 0) scale(1)',
                  transformOrigin: '0 0'
                }"
                :src="src"
                @click="preview(2,$event)" 
                @transitionend="transEnd"
            >
        </div>
    </div>
</template>
<script>
export default {
    name: 'ViewPicture',
    props:{
        src: {
            type:String,
            default: ''
        },
        width:{
            type: String,
            default: '100px'
        },
        height:{
            type: String,
            default: '100px'
        }
    },
    data() {
        return {
            // 记录动画起始状态的元素位置信息，left, top
            previewFirstRect: [0, 0],
            previewLastRect: [0,0],
            // 标识预览的状态，1：显示，2：开始关闭，3：已关闭
            previewVisibleStatus: 3,
            // 当前预览的元素
            currentPreviewEle: null,
            // First与Last两个状态之间的缩放比例
            scaleValue: 1,
            rectInfo: null,
            previewStatus: 0,
        }
    },
    methods:{
        preview(status,e) {
            console.log(status,e.target);
            this.previewVisibleStatus = status
            if (this.previewVisibleStatus === 1) {
                this.currentPreviewEle = e.target
                let rectInfo = this.currentPreviewEle.getBoundingClientRect()
                this.rectInfo = rectInfo
                this.$set(this.previewFirstRect, 0, rectInfo.left)
                this.$set(this.previewFirstRect, 1, rectInfo.top)
                console.log(this.previewFirstRect);
                this.previewStatus = 1
            } else {
                this.previewStatus = 1
            }
        },
        updatePreviewStatus() {
            if (this.previewStatus === 1) {
                if (this.previewVisibleStatus === 1) {
                    this.$nextTick(() => {
                        const lastRectInfo = this.$refs.pic.getBoundingClientRect()
                        this.$set(this.previewLastRect, 0, lastRectInfo.left)
                        this.$set(this.previewLastRect, 1, lastRectInfo.top)
                        this.scaleValue = this.rectInfo.width / lastRectInfo.width
                        console.log(this.previewLastRect);
                    })
                }
                this.previewStatus = 2
            }else if (this.previewStatus === 2) {
                // Play
                setTimeout(() => {
                    this.previewStatus = 3
                }, 0)
            }
        },
        transEnd () {
            console.log('-----');
            if (this.previewVisibleStatus === 2 && this.previewVisibleStatus !== 3) {
                this.previewVisibleStatus = 3
                this.previewStatus= 0
            }
        }
    },
    updated() {
        this.updatePreviewStatus()
    },
    destroyed() {
        this.currentPreviewEle = null
        this.rectInfo = null
    }
}
</script>
<style scoped>
.active{
    transition: all .36s ease-in-out;
}
.view_box{
    opacity: 0.65;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    /* opacity: 0; */
    background-color: #000;
    transition: opacity .36s ease-in-out;
    z-index: 1000;
}
.view_picture{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    max-width: 100%;
    max-height: 100%;
    border-radius: 10px;
    z-index: 1002;
}
</style>