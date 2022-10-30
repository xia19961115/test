<template>
  <div>
    <!-- <div v-for="(item,index) in list" :key="index">
            <span @click.stop="toggleOpen(item)">{{item.name}}</span>
            <div v-if="item.children && open" style="margin-left:20px">
                <tree 
                :list="item.children"
                />
            </div>
        </div> -->
    <tree-item
      v-for="(item, index) in currentList"
      :key="index"
      :item="item"
      :listKey="listKey"
      v-model="currentValue"
      :listLabel="listLabel"
    ></tree-item>
  </div>
</template>
<script>
import TreeItem from "./treeItem.vue";
export default {
  name: "tree",
  components: { TreeItem },
  provide() {
    return {
      getDataAllChildrenValue: this.getDataAllChildrenValue,
    };
  },
  computed: {
    currentList() {
      return this.list;
    },
    // 组件内数据
    currentValue:{
      get(){
        return this.value || []
      },
      set(val){
        let newVal = this.setCurrentVal(val,this.list)
        this.$emit('input',newVal)
      }
    },
  },
  props: {
    // 绑定的数据
    value: {},
    list: {
      type: Array,
      default: () => [],
    },
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
    return {};
  },
  methods: {
      // 获取全部子级数据
      getDataAllChildrenValue(list,hasParent){
          let valueList = []
          list.forEach(item=>{
            console.log(item);
              if(item.children && item.children.length>0){
                  // 数据层次不push有子级的
                  let childrenList =  this.getDataAllChildrenValue(item.children,hasParent)
                  valueList = [...valueList,...childrenList]
                  if(hasParent){
                    valueList.push(item[this.listKey])
                  }
              }else{
                  valueList.push(item[this.listKey])
              }
          })
          console.log(',', valueList);
          return valueList
      },
      // 递归查询每个数据下是否有子级没被选中 如果没被选中则过滤掉这个数据
      setCurrentVal(value,dataList){
        let newCurrentValue = value
        dataList.map(item=>{
          // 查询取消勾选的节点下是否全部选中了
          if(item.children && item.children.length>0){
            newCurrentValue = this.setCurrentVal(newCurrentValue,item.children)
            let list = this.getDataAllChildrenValue(item.children)
            // 子级是否全部选中
            let checked = true
            list.map(val=>{
                if(!newCurrentValue.includes(val)){
                    checked = false
                }
            })
            // 子级没有全部选中的情况下 过滤当前节点
            if(!checked){
                newCurrentValue = newCurrentValue.filter(_item=>_item !== item[this.listKey])
            }else{
              // 子级全选的情况下 如果newCurrentValue没有当前级数据 则push
              if(!newCurrentValue.includes(item[this.listKey])){
                newCurrentValue.push(item[this.listKey])
              }

            }
          }
        
        })
        return newCurrentValue
      }
  },
};
</script>
