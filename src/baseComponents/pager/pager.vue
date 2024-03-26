<template>
  <ul @click="onPagerClick" class="el-pager">
    <li
      :class="{ active: currentPage === 1, disabled }"
      v-if="pageCount > 0"
      class="number">1</li>
    <li
      class="el-icon more btn-quickprev"
      :class="[quickprevIconClass, { disabled }]"
      v-if="showPrevMore"
      @mouseenter="onMouseenter('left')"
      @mouseleave="quickprevIconClass = 'el-icon-more'">
    </li>
    <li
      v-for="pager in pagers"
      :key="pager"
      :class="{ active: currentPage === pager, disabled }"
      class="number">{{ pager }}</li>
    <li
      class="el-icon more btn-quicknext"
      :class="[quicknextIconClass, { disabled }]"
      v-if="showNextMore"
      @mouseenter="onMouseenter('right')"
      @mouseleave="quicknextIconClass = 'el-icon-more'">
    </li>
    <li
      :class="{ active: currentPage === pageCount, disabled }"
      class="number"
      v-if="pageCount > 1">{{ pageCount }}</li>
  </ul>
</template>

<script>
  export default {
    name: 'ElPager',

    props: {
      currentPage: Number,

      pageCount: Number,

      pagerCount: Number,

      disabled: Boolean
    },

    watch: {
      showPrevMore(val) {
        // console.log(val, 'prevIcon');
        if (!val) this.quickprevIconClass = 'el-icon-more';
      },

      showNextMore(val) {
        // console.log(val, 'nextIcon');
        if (!val) this.quicknextIconClass = 'el-icon-more';
      }
    },

    methods: {
      changeShowMore(val1, val2){
        this.showPrevMore = val1;
        this.showNextMore = val2;
      },
      onPagerClick(event) {
        const target = event.target;
        if (target.tagName === 'UL' || this.disabled) {
          return;
        }

        let newPage = Number(event.target.textContent);
        const pageCount = this.pageCount;
        const currentPage = this.currentPage;
        const pagerCountOffset = this.pagerCount - 2;

        if (target.className.indexOf('more') !== -1) {
          if (target.className.indexOf('quickprev') !== -1) {
            newPage = currentPage - pagerCountOffset;
          } else if (target.className.indexOf('quicknext') !== -1) {
            newPage = currentPage + pagerCountOffset;
          }
        }

        /* istanbul ignore if */
        if (!isNaN(newPage)) {
          if (newPage < 1) {
            newPage = 1;
          }

          if (newPage > pageCount) {
            newPage = pageCount;
          }
        }

        if (newPage !== currentPage) {
          this.$emit('change', newPage);
        }
      },

      onMouseenter(direction) {
        if (this.disabled) return;
        if (direction === 'left') {
          this.quickprevIconClass = 'el-icon-d-arrow-left';
        } else {
          this.quicknextIconClass = 'el-icon-d-arrow-right';
        }
      }
    },

    computed: {
      pagers() {
        const pagerCount = this.pagerCount;
        const halfPagerCount = (pagerCount - 1) / 2;

        const currentPage = Number(this.currentPage);
        const pageCount = Number(this.pageCount);

        let showPrevMore = false;
        let showNextMore = false;
        

        // 总页数 大于 容器页数
        if (pageCount > pagerCount) {
            // 当前页 大于 (容器页(7) - 容器页的一半(7-1)/2)
          if (currentPage > pagerCount - halfPagerCount) {
            // 前一页 显示
            showPrevMore = true;
          }
            // 当前页 小于 (总页数 - 容器页的一半)
          if (currentPage < pageCount - halfPagerCount) {
            // 后一页 显示
            showNextMore = true;
          }
        }

        const array = [];

        // 前一页显示 且 后一页不显示(表示靠近末尾页)
        if (showPrevMore && !showNextMore) {
            // 起始页码 (最大页 - 容器页 - 2)
          const startPage = pageCount - (pagerCount - 2);
          for (let i = startPage; i < pageCount; i++) {
            array.push(i);
          }
        } 
        // 前一页不显示 且 后一页显示(表示靠近首页)
        else if (!showPrevMore && showNextMore) {
            // 1是固定存在 从2开始
          for (let i = 2; i < pagerCount; i++) {
            array.push(i);
          }
        } 
        // 前一页显示 且 后一页显示(表示在中间)
        else if (showPrevMore && showNextMore) {
          const offset = Math.floor(pagerCount / 2) - 1;
          console.log(offset, 'offset');
          // 从当前页 - 2  循环  结束条件 当前页 + 2(中间就展示5页)
          for (let i = currentPage - offset ; i <= currentPage + offset; i++) {
            array.push(i);
          }
        }
         else {
          for (let i = 2; i < pageCount; i++) {
            array.push(i);
          }
        }
        this.changeShowMore(showPrevMore,showNextMore)
        // console.log(showPrevMore);
        // console.log(showNextMore);

        return array;
      }
    },

    data() {
      return {
        current: null,
        showPrevMore: false,
        showNextMore: false,
        quicknextIconClass: 'el-icon-more',
        quickprevIconClass: 'el-icon-more'
      };
    }
  };
</script>