<template>
    <div ref="editor"></div>
</template>
<script>
import E from 'wangeditor'
export default {
  name:'Edit',
  props: {
    value: {
      type: String,
      default: ''
    },
    // 自定义菜单
    meanArray: {
      type: Array,
      default: () => []
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  watch: {
    value: function (value) {
      if (value !== this.editor.txt.html()) {
        this.editor.txt.html(this.value)
      }
    }
    // 监听输入的内容
  },
  data () {
    return {
      defaultMeanus: [
        'head',
        'bold',
        'italic',
        'underline',
        'foreColor',
        'justify',
        'undo',
        'image',
        'indent',
        'lineHeight',
      ]
    }
  },
  methods: {
    init () {
      this.editor = new E(this.$refs.editor)
      this.editor.config.showLinkImg = false
      this.editor.config.uploadImgServer = process.env.VUE_APP_UPLOAD_IMG
      // this.editor.config.uploadImgHeaders = {
      //   'ccv-auth': a()
      // }
      this.editor.config.uploadFileName = 'file'
      this.editor.config.uploadImgHooks = {
        before: () => {
          this.editor.config.uploadImgHeaders = {
            // 'ccv-auth': a()
          }
        },
        customInsert: function (insertImgFn, result) {
          insertImgFn(process.env.VUE_APP_IMG + result.object)
        }
      }
      // this.editor.config.uploadImgServer = "http://127.0.0.1:5000/uploadFile"
      // this.editor.config.uploadFileName = 'file'
      this.setMenus() // 设置菜单
      this.editor.config.onchange = (html) => {
        this.$emit('change', html) // 将内容同步到父组件中
      }
      this.editor.create() // 创建编辑器
    },
    setMenus () {
      if (this.meanArray.length > 0) {
        this.editor.config.menus = this.meanArray
      } else {
        this.editor.config.menus = this.defaultMeanus
      }
    },
    getHtml () {
      // 得到文本内容
      return this.editor.txt.html
    },
    setHtml (txt) {
      // 设置富文本里面的值
      this.editor.txt.html(txt)
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.init()
    })
  }
}
</script>