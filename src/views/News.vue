<template>
    <div>
        <!-- 兄弟组件通讯 -->
        <First />
        <Second />
        <!-- 测试上传组件 -->
        <Upload 
            v-model="arr" 
            :limitNum="3"
            :listType="'text'"
            :fileSzie="fileSzie"
        />
        <Upload 
            v-model="arr1"
            :listType="'picture'"
        />
        <input type="text" v-h1>
    </div>
</template>
<script>
import Second from '@/components/second.vue'
import First from '@/components/first.vue'
import Upload from '@/components/upload.vue'
export default {
    name:'News',
    components:{First,Second,Upload},
    data(){
        return{
            arr:[{
              name:'16438817695705g.png',
              url: "http://127.0.0.1:5000/file/16438817695705g.png"
            }],
            arr1:[]
        }
    },
    methods:{
        fileSzie(param){
            console.log(param);
           if (param.size>5500) {
               this.$message.error('您最大上传数量为');
               return false
           } else {
               return true
           }
        }
    },
    watch:{
        arr:{
            handler(val){
                console.log('watch中的val',val);
            },
            deep:true
        }
    }
}
</script>