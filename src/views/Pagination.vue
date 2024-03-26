<!--
 * @Description: 
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2024-03-27 02:12:42
 * @LastEditTime: 2024-03-27 02:20:53
-->
<template>
  <div>
    <pager2 
        :currentPage="currentPage" 
        :pageCount="pageCount" 
        :pagerCount="pagerCount" 
        @change="change"
    />
  </div>
</template>

<script>
import pager2 from "@/baseComponents/pager/pager.vue";
export default {
    components: { pager2 },
    data() {
        return {
            currentPage: 1,
            pageCount: 100,
            pagerCount: 7
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
