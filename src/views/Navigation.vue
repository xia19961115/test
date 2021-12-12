<template>
  <div class="navigation">
    <div class="navigation-title">中央后台系统</div>
    <div class="navigation-item">
      <div v-for="(item, index) in routeList" :key="index">
        <div class="navigation-subtitle" @click="handleSumbitIcon(item)">
          <span>{{ item.label }}</span>
          <i :class="item.show ? 'el-icon-arrow-down' : 'el-icon-arrow-up'"></i>
        </div>
        <div
          class="navigation-child"
          :style="`height:${item.show ? 40 * item.child.length : 0}px`"
        >
          <div
            v-for="(items, index1) in item.child"
            :key="index1"
            @click="handleClickItem(items)"
            :class="items.name === $route.name ? 'navigation-active' : ''"
            class="navigation-child-hover"
          >
            {{ items.label }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Navigation",
  data() {
    return {
      routeList: [
        {
          label: "商户管理",
          show: true,
          child: [
            {
              label: "我的名字",
              route: "/my",
              name: "My",
            },
            {
              label: "我的1",
              route: "/file",
              name: "File",
            },
          ],
        },
        {
          label: "商户管理2",
          show: false,
          child: [
            {
              label: "我的名字",
              route: "/my1",
              name: "My1",
            },
            {
              label: "我的1",
              route: "/file1",
              name: "File1",
            },
          ],
        },
      ],
    };
  },
  created() {
    console.log(this.$route.name);
  },
  methods: {
    handleSumbitIcon(item) {
      item.show = !item.show;
    },
    handleClickItem(payload) {
      // console.log(payload);
      if (this.$route.name != payload.name) {
        this.$router.push({ name: payload.name });
      } else {
        console.log("别重复点击");
      }
    },
  },
};
</script>
<style scoped lang='scss'>
.navigation {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 300px;
  font-family: KaiTi;
  background: #ccc;
  &-title {
    font-size: 26px;
    width: 100%;
    height: 70px;
    line-height: 70px;
    text-align: center;
    border-bottom: 1px solid;
  }
  &-item{
    position: absolute;
    overflow: auto;
    width: 100%;
    height: 100%;
  }
  &-subtitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    padding: 0 15px;
    font-size: 24px;
    height: 50px;
  }
  &-child {
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    text-indent: 40px;
    overflow: hidden;
    transition: all 0.6s;
    & > div {
      height: 40px;
      line-height: 40px;
      font-size: 20px;
      cursor: pointer;
      &:hover{
        background: #434a50;
        transition: all .4s;
      }
    }
  }
  &-active {
    width: 100%;
    box-sizing: border-box;
    background: #434a50;
    border-right: 10px solid #24292e;
    color: #ffd04b;
    transition: all .6s;
  }
}
</style>
