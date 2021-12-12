<template>
  <div>
  <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    height="250"
    :header-row-class-name = "calc"
    @selection-change="handleSelectionChange">
    <!--     header-row-class-name = "calc" -->
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="日期"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      :formatter="(row)=>{return row.name+'123322121233124212131321321'}"
      show-overflow-tooltip
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      show-overflow-tooltip>
    </el-table-column>
  </el-table>
  <div style="margin-top: 20px">
    <!-- <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
    <el-button @click="toggleSelection()">取消选择</el-button> -->
    <el-button type="primary" @click="handleClick(123,2)">主要按钮</el-button>
    <p @click="handleEvent($event)">{{num}}</p>
  </div>
  </div>
</template>
<script>
import {throttle} from '@/common/utils'
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: [],
        num:1
      }
    },
    methods: {
      handleFormatter(row){
        console.log('row', row);
      },
      calc({row,rowIndex}){
          console.log(row);
          console.log(rowIndex);
          if(rowIndex === 0){
              return 'calc'
          }
      },
      toggleSelection(rows) {
          console.log(rows);
        // if (rows) {
        //   rows.forEach(row => {
        //     this.$refs.multipleTable.toggleRowSelection(row);
        //   });
        // } else {
        //   this.$refs.multipleTable.clearSelection();
        // }
      },
      handleSelectionChange(val) {
        // console.log(val);
        let arr = val.map(item=>{return item.date})
        console.log(arr);
        // this.multipleSelection = val;
      },
      handleEvent(e){
        console.log(e.target);
        console.log(e.currentTarget);
        e.target.innerText ='zhangsan'
        // #region
        /**
         * 
         */
        // #endregion
        // this.num = this.num+1
      },
      handleClick:throttle(function(){
        this.handleEvent()
      },2000)
      
    }
  }
</script>
<style lang="scss">
.el-table .calc th{
    color: #409EFF;
}


</style>