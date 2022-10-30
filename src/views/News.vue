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
        <el-input type="text" v-model="aaa" v-h1 />
        <tree :list="list" v-model="treeArr"/>
    </div>
</template>
<script>
import Second from '@/components/second.vue'
import First from '@/components/first.vue'
import Upload from '@/components/upload.vue'
import tree from '@/components/tree/tree.vue'
export default {
    name:'News',
    components:{First,Second,Upload,tree},
    data(){
        return{
            aaa:'',
            arr:[{
              name:'16438817695705g.png',
              url: "http://127.0.0.1:5000/file/16438817695705g.png"
            }],
            arr1:[],
            list: [
                {
                    label: 'a1',
                    value: 1,
                    children: [
                        {
                            label: 'a1-1',
                            value: 2,
                            pid: 1,
                            children: [
                                {
                                   label: 'a1-1-1',
                                   value: 3,
                                   pid: 2,
                                   children: []
                                },
                                {
                                   label: 'a1-1-2',
                                   value: 6,
                                   pid: 2,
                                   children: []
                                }
                            ]

                        },
                        {
                            label: 'a1-2',
                            value: 7,
                            pid: 1,
                            children: [
                                {
                                   label: 'a1-2-1',
                                   value: 8,
                                   pid: 7,
                                   children: []
                                },
                                {
                                   label: 'a1-2-2',
                                   value: 9,
                                   pid: 7,
                                   children: []
                                }
                            ]

                        }
                    ]
                },
                {
                    label: 'b1',
                    value: 4,
                    children: [
                        {
                            label: 'b1-1',
                            value: 5,
                            pid: 4,
                            children: []
                        }
                    ]
                },
            ],
            treeArr: []
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