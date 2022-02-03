<template>
  <div>
    <el-upload
      multiple
      :limit="$attrs.limitNum"
      :list-type="$attrs.listType || 'text'"
      class="upload-demo"
      action="http://127.0.0.1:5000/uploadFile"
      :on-exceed="handleExceed"
      :on-success="handleSuccess"
      :on-remove="handleRemove"
      :file-list="value"
    >
      <el-button size="small" type="text">点击上传</el-button>
    </el-upload>
  </div>
</template>
<script>
export default {
  name: "Upload",
  props: {
      value:{
        type:Array,
        default:() =>[]
      }
  },
  model: {
    prop: "value",
    event: "change",
  },
  methods: {
    // 上传成功
    handleSuccess(_,file) {
      console.log('2',file);
      let obj = {
          name: file.name,
          url: 'http://127.0.0.1:5000/file/'+file.response.data,
          fileName:file.response.data
      }
      let list = this.value
      list.push(obj)
      this.$emit('change',list)
    },
    // 文件超出最大限制
    handleExceed() {
        this.$message.error('您最大上传数量为'+this.$attrs.limitNum);
    },
    // 文件被移出
    handleRemove(file) {
        let list = this.value
        const index = list.findIndex(item => {
            return item.uid === file.uid
        })
        list.splice(index, 1)
        this.$emit('change',list)
    }
  },
};
</script>