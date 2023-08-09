<!--
 * @Description: 
 * @Auther: xianing
 * @LastEditors: xianing
 * @Date: 2023-08-09 15:50:32
 * @LastEditTime: 2023-08-09 17:01:00
-->
<template>
  <div>
    <RecycleScroller class="scroll" :item="items" :itemSize="54">
      <template v-slot="scoped">
        <ListItem :key="scoped.item.id" :item="scoped.item"/>
      </template>
    </RecycleScroller>
  </div>
</template>

<script>
import RecycleScroller from "@/components/RecycleScroller/RecycleScroller.vue";
import ListItem from "@/components/RecycleScroller/ListItem.vue";
var items = [];
for (let i = 0; i < 10000; i++) {
  items.push({
    id: i + 1,
    count: i + 1,
  });
}
export default {
  components: { RecycleScroller,ListItem },
  data(){
    return {
        items
    }
  }
};
</script>

<style>
.scroll {
  margin: 0 auto;
  width: 600px;
  border: 1px solid;
  height: 500px;
}
.h{
    height: 54px;
    text-align: center;
    line-height: 54px;
    box-sizing: border-box;
}
</style>
