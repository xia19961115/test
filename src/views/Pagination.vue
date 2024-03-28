<!--
 * @Description: 
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2024-03-27 02:12:42
 * @LastEditTime: 2024-03-28 15:08:25
-->
<template>
  <div>
    <pager2 
        :currentPage="currentPage" 
        :pageCount="pageCount" 
        :pagerCount="pagerCount" 
        @change="change"
    />
    <MockRender :count="count" @add="count++"/>
  </div>
</template>

<script>
import pager2 from "@/baseComponents/pager/pager.vue";
import MockRender from '@/components/MockRender'
export default {
    components: { pager2, MockRender },
    data() {
        return {
            currentPage: 1,
            pageCount: 100,
            pagerCount: 7,
            count: 10
        }
    },
    methods:{
        change(e) {
            console.log(e);
            this.currentPage = e
        }
    }
};
</script>

<style></style>
