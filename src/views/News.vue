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
        />
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
            arr:[]
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