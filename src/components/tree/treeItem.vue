<template>
  <div>
    <div class="box">
        <div @click="chooseItem(item)">
        <!-- 选中 -->
        <div class="check_box all" v-if="isChecked"></div>

        <!-- 半选中 -->
        <div class="check_box half" v-else-if="valueInChildren"></div>

        <!-- 没选 -->
        <div class="check_box none" v-else></div>
        </div>
        <span style="margin-left: 5px" @click.stop="toggleOpen">{{ item[listLabel] }}</span>
    </div>
    <div v-if="item.children && open" style="margin-left:10px">
      <tree-item
        v-for="(item, index) in item.children"
        :key="index"
        :item="item"
        :listKey="listKey"
        :listLabel="listLabel"
        v-model="currentValue"
      ></tree-item>
    </div>
  </div>
</template>
<script>
export default {
  name: "treeItem",
  inject: ["getDataAllChildrenValue"],
  props: {
    // 绑定的数据
    value: {},
    // item数据
    item: {
      type: Object,
      default: () => {},
    },
    // 数据key
    listKey: {
      type: String,
      default: "value",
    },
    // 数据label
    listLabel: {
      type: String,
      default: "label",
    },
  },
  data() {
    return {
      open: true,
    };
  },
  computed: {
    // 是否有子级
    hasChild() {
      return this.item.children && this.item.children.length > 0;
    },
    // 组件内数据
    currentValue: {
      get() {
        return this.value || [];
      },
      set(val) {
        this.$emit("input", val);
      },
    },
    // 子级是否有选中数据
    valueInChildren() {
      // 没数据不用递归
      if (this.hasChild && this.value) {
        return this.isValueInChildren(this.item.children);
      } else {
        return false;
      }
    },
    // 是否为选中状态  有子级的看子级是否都选中
    isChecked() {
      let item = this.item;
      let checked = true;
      // 有子级的情况下看子级是否都选择了
      if (item.children && item.children.length > 0) {
        let list = this.getDataAllChildrenValue(item.children);
        list.map((val) => {
          if (!this.currentValue.includes(val)) {
            checked = false;
          }
        });
      } else {
        // 看自己是否选中
        checked = this.currentValue.includes(item[this.listKey]);
      }
      return checked;
    },
  },
  methods: {
    toggleOpen() {
      if (this.hasChild) {
        this.open = !this.open;
      }
    },
    //进行多选勾选
    chooseItem(data) {
    //   console.log("chooseItem", data);
      // 当前已选中的数据
      let newCurrentValue = [];
      // 如果已选中 则取消选择 并从currentValue里去掉所有子级数据
      if (this.isChecked) {
        // 已存在数据未选中情况下 在currentValue中push当前级以及全部子级数据
        if (data._children && data._children.length > 0) {
          // 筛选状态 需要选中_children
          let newData = { ...data };
          newData.children = null;
          newCurrentValue = this.setCurrentValueReduce([
            ...data._children,
            newData,
          ]);
        } else {
          newCurrentValue = this.setCurrentValueReduce([data]);
        }
      } else {
        // 已存在数据未选中情况下 在currentValue中push当前级以及全部子级数据
        if (data._children && data._children.length > 0) {
          // 筛选状态 需要选中_children
          newCurrentValue = [
            ...this.currentValue,
            ...this.getDataAllChildrenValue(data._children, true),
            data[this.listKey],
          ];
        } else {
          newCurrentValue = [
            ...this.currentValue,
            ...this.getDataAllChildrenValue([data], true),
          ];
        }
      }
    //   console.log("选中", newCurrentValue);
      this.$emit("input", newCurrentValue);
      // return
    },
    // 取消选择
    setCurrentValueReduce(list) {
      // 当前需要取消选择的全部数组数据
      let valueList = this.getDataAllChildrenValue(list);
    //   console.log(valueList, 'valueList');
      // 当前组件内已经选择到的value
      let currentValue = this.currentValue.filter(
        (item) => !valueList.includes(item)
      );
      return currentValue;
    },

    // 递归判断选中value是否在当前item下
    isValueInChildren(list) {
      let value = this.value;
      let hasValue = false;
      for (let i = 0; i < list.length; i++) {
        let item = list[i];

        // 找到hasValue直接返回true
        if (value.includes(item[this.listKey])) {
          hasValue = true;
        }

        // 找子级
        if (item.children && item.children.length > 0) {
          let childValue = this.isValueInChildren(item.children);
          if (childValue) {
            hasValue = childValue;
          }
        }

        // 找到后停止
        if (hasValue) {
          break;
        }
      }
      return hasValue;
    },
  },
};
</script>

<style lang="scss" scoped>
.box{
    display: flex;
    align-items: center;
    margin-bottom: 5px;
}

.check_box {
  width: 16px;
  height: 16px;
}

.all {
  background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='16' height='16' rx='2' fill='%231C4C7F'/%3E%3Cpath d='M3.767 8.409l3.453 2.678 5.194-6.663' stroke='%23fff' stroke-width='2'/%3E%3C/svg%3E");
}

.half {
  background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='16' height='16' rx='2' fill='%231C4C7F'/%3E%3Cpath d='M4 8h8' stroke='%23fff' stroke-width='2'/%3E%3C/svg%3E");
}

.none {
  background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='.5' y='.5' width='15' height='15' rx='1.5' stroke='%23848382'/%3E%3C/svg%3E");
}
</style>
