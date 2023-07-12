<template>
  <div class="pager-container" v-if="pageNumber > 1">
    <a @click="handleClick(1)" :class="{ disabled: current === 1 }">
      |&lt;&lt;
    </a>
    <a @click="handleClick(current - 1)" :class="{ disabled: current === 1 }">
      &lt;&lt;
    </a>
    <a
      @click="handleClick(n)"
      v-for="(n, i) in numbers"
      :key="i"
      :class="{ active: n === current }"
    >
      {{ n }}
    </a>

    <a
      @click="handleClick(current + 1)"
      :class="{ disabled: current === pageNumber }"
    >
      &gt;&gt;
    </a>
    <a
      @click="handleClick(pageNumber)"
      :class="{ disabled: current === pageNumber }"
    >
      &gt;&gt;|
    </a>
  </div>
</template>

<script>
export default {
  name: "Pager",
  props: {
    // 当前页码
    current: {
      type: Number,
      default: 1,
    },
    // 一共多少页
    total: {
      type: Number,
      default: 0,
    },
    // 每页数量
    limit: {
      type: Number,
      default: 10,
    },
    // 展示页码 数量
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    // 总页数
    pageNumber() {
      return Math.ceil(this.total / this.limit);
    },
    // 得到显示的最小数字(当前页数 - visibleNumber / 2)
    visibleMin() {
      let min = this.current - Math.floor(this.visibleNumber / 2);
      // 边界处理
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    // 得到最大数(最小页 + visibleNumber - 1)
    visibleMax() {
      let max = this.visibleMin + this.visibleNumber - 1;
      // 边界处理
      if (max > this.pageNumber) {
        max = this.pageNumber;
      }
      return max;
    },
    numbers() {
      let nums = [];
      for (let i = this.visibleMin; i <= this.visibleMax; i++) {
        nums.push(i);
      }
      return nums;
    },
  },
  methods: {
    handleClick(newPage) {
      if (newPage < 1) {
        newPage = 1;
      }
      if (newPage > this.pageNumber) {
        newPage = this.pageNumber;
      }
      if (newPage === this.current) {
        return;
      }
      // 抛出一个事件
      this.$emit("pageChange", newPage);
    },
  },
};
</script>

<style lang="scss" scpoed>
.pager-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  a {
    color: #6b9eee;
    margin: 0 6px;
    cursor: pointer;
    &.disabled {
      color: #999;
      cursor: not-allowed;
    }
    &.active {
      color: #373737;
      font-weight: bold;
      cursor: text;
    }
  }
}
</style>
