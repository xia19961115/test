<!--
 * @Description: 
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2023-09-23 20:28:46
 * @LastEditTime: 2023-09-23 20:53:45
-->
<template>
  <div>
    {{ text }}
    <el-button type="primary" @click="handleClick">点击</el-button>
    <el-dialog :key="timer" title="提示" :visible.sync="dialogVisible" width="30%" destroy-on-close :before-close="handleClose">
      <el-input v-model="text" placeholder=""></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      text: "",
      timer: new Date().getTime()
    };
  },
  methods: {
    handleClick() {
      this.dialogVisible = true;
    },
    handleClose(done) {
        console.log(done)
        done()
    }
  },
};
</script>

<style></style>
