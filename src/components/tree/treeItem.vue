<template>
    <div>
            <div @click="chooseItem(item)">
            <!-- 选中 -->
            <div  v-if="isChecked">
                1
            </div>

            <!-- 半选中 -->
            <div  v-else-if="valueInChildren">
                2
            </div>

            <!-- 没选 -->
            <div v-else>
                3
            </div>
            
            </div>
        <span @click.stop="toggleOpen">{{item[listLabel]}}</span>
        <div v-if="item.children && open" style="margin-left:20px">
            <tree-item
                v-for="(item,index) in item.children"
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
    name:'treeItem',
    inject:['getDataAllChildrenValue'],
    props:{
        // 绑定的数据
        value:{},
        // item数据
        item: {
            type: Object,
            default:()=>{}
        },
        // 数据key
        listKey:{
            type:String,
            default:'value'
        },
        // 数据label
        listLabel:{
            type:String,
            default:'label'
        }
    },
    data() {
        return {
            open: false,
        }
    },
    computed: {
       // 是否有子级
       hasChild(){
         return this.item.children && this.item.children.length>0
       },
       // 组件内数据
       currentValue:{
         get(){
            return this.value || []
         },
         set(val){
            this.$emit('input',val)
         }
       },
       // 子级是否有选中数据
       valueInChildren(){
           // 没数据不用递归
           if(this.hasChild && this.value){
              return this.isValueInChildren(this.item.children)
           }else{
              return false
           }
       },
       // 是否为选中状态  有子级的看子级是否都选中
       isChecked(){
        let item = this.item
        let checked = true
        // 有子级的情况下看子级是否都选择了
        if(item.children && item.children.length>0){
            let list = this.getDataAllChildrenValue(item.children)
            console.log('em......',this.currentValue);
            list.map(val=>{
                if(!this.currentValue.includes(val)){
                    checked = false
                }
            })
        }else{
            // 看自己是否选中
            checked = this.currentValue.includes(item[this.listKey])
        }
        return checked
       }
    },
    methods:{
        toggleOpen() {
            if (this.hasChild) {
                this.open = !this.open
            }
        },
        //进行多选勾选
        chooseItem(data){
            console.log('chooseItem', data)
            // 当前已选中的数据
            let newCurrentValue = []
            // 如果已选中 则取消选择 并从currentValue里去掉所有子级数据
            if(this.isChecked){
                
                // 已存在数据未选中情况下 在currentValue中push当前级以及全部子级数据
                if(data._children && data._children.length>0){
                    // 筛选状态 需要选中_children
                    let newData = {...data}
                    newData.children = null
                    newCurrentValue =this.setCurrentValueReduce([...data._children,newData])
                }else{
                   newCurrentValue = this.setCurrentValueReduce([data])
                }
            }else{
                // 已存在数据未选中情况下 在currentValue中push当前级以及全部子级数据
                if(data._children && data._children.length>0){
                    // 筛选状态 需要选中_children
                    newCurrentValue = [...this.currentValue,...this.getDataAllChildrenValue(data._children,true),data[this.listKey]]
                }else{
                    newCurrentValue = [...this.currentValue,...this.getDataAllChildrenValue([data],true)]
                }
            }
            console.log('选中', newCurrentValue);
            this.$emit('input',newCurrentValue)
            // return 
        },
        // 取消选择
        setCurrentValueReduce(list){
            // 当前需要取消选择的全部数组数据
            let valueList = this.getDataAllChildrenValue(list)
            // 当前组件内已经选择到的value
            let currentValue = this.currentValue.filter(item=>!valueList.includes(item))
            return currentValue
        },
    

        // 递归判断选中value是否在当前item下
        isValueInChildren(list){
            let value = this.value
            let hasValue = false
            for(let i =0;i<list.length;i++){
                let item = list[i]
                
                // 找到hasValue直接返回true
                if(value.includes(item[this.listKey]) ){
                    hasValue = true
                }

                // 找子级
                if(item.children&& item.children.length>0){
                    let childValue =this.isValueInChildren(item.children)
                    if(childValue){
                        hasValue = childValue
                    }
                }
                
                // 找到后停止
                if(hasValue){
                    break
                }
            }
            return hasValue
        }
    }
}
</script>
