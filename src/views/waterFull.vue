<!--
 * @Description: 
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2023-06-29 00:32:49
 * @LastEditTime: 2023-06-29 02:50:31
-->
<template>
  <div class="waterFull">
    <div ref="waterFullContainer" class="waterFull-container">
      <div
        class="waterFull-container-item"
        v-for="(item, index) in imgList"
        :key="index"
      >
        <img :src="item" @load="imgLoad" />
        <div>12311</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgList: [],
      domList: [],
      itemWidth: 0,
      maxTop: 0,
      fn: null,
    };
  },
  methods: {
    // 获取水平方向上的信息
    getHorizontalInfo() {
      //   this.$nextTick(() => {
      let obj = {};
      obj.containerWidth = Math.floor(
        this.$refs.waterFullContainer.clientWidth
      );
      const item = this.$el.querySelector(".waterFull-container-item");
      this.itemWidth = window.getComputedStyle(item).width.replace(/px/g, "");
      // 图片数量
      obj.number = Math.floor(obj.containerWidth / this.itemWidth);
      // 图片间隙
      obj.gap =
        (obj.containerWidth - obj.number * this.itemWidth) / (obj.number - 1);
      return obj;
      //   });
      //   console.log(obj);
      //   return obj;
    },
    // 设置图片位置
    setImgPosition() {
      // this.getHorizontalInfo()
      let info = this.getHorizontalInfo();
      let arr = new Array(info.number); //存放每一列下一张图片的top值
      arr.fill(0); // 初始值为[0,0....]
      this.domList.forEach((item) => {
        let minTop = Math.min.apply(null, arr);
        item.style.top = minTop + "px";
        let index = arr.indexOf(minTop); //找到对应的列编号
        arr[index] += item.clientHeight + info.gap;
        // 设置水平坐标
        item.style.left = index * (+this.itemWidth + +info.gap) + "px";
      });
      this.maxTop = Math.max.apply(null, arr) - info.gap;
    },
    imgLoad() {
      this.$nextTick(() => {
        this.domList = this.$el.querySelectorAll(".waterFull-container-item");
        this.setImgPosition();
      });
    },
    debounce(fn, delay) {
      let timer;
      return function() {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          fn.apply(this, arguments);
        }, delay);
      };
    },
    // 是否需要请求
    isScroll() {
      if (
        this.maxTop - 30 <
        this.$refs.waterFullContainer.clientHeight +
          this.$refs.waterFullContainer.scrollTop
      ) {
        // 到底部了 需要请求
        // this.fn();
        this.mockRequest();
      }
    },
    // 模拟请求图片
    mockRequest() {
      for (let i = 0; i <= 20; i++) {
        this.imgList.push(require(`../assets/waterFull/${i}.jpg`));
      }
    },
  },
  mounted() {
    this.mockRequest();
    this.fn = this.debounce(this.setImgPosition, 50);
    window.addEventListener("resize", this.fn);
    this.$refs.waterFullContainer.addEventListener("scroll", this.isScroll);
    this.$once("hook:beforeDestroy", () => {
      window.removeEventListener("resize", this.fn);
      this.$refs.waterFullContainer.removeEventListener("scroll", this.isScroll);
    });
  },
};
</script>
<style lang="scss" scoped>
.waterFull {
  width: 100%;
  height: auto;
  &-container {
    margin: 0 auto;
    width: 100%;
    height: 600px;
    border: 1px solid;
    box-sizing: border-box;
    position: relative;
    overflow: hidden scroll;
    background: #252632;
    &-item {
      width: 220px;
      height: auto;
      background: #fff;
      position: absolute;
      transition: all 0.5s;
      & > img {
        width: 100%;
        object-fit: contain;
      }
    }
  }
}
</style>
