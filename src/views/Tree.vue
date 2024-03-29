<template>
  <div>
    <tree :list="list" v-model="treeArr" />
    <el-button type="primary" @click="handleGet">获取数据</el-button>
  </div>
</template>

<script>
import tree from "@/components/tree/tree.vue";
export default {
  components: { tree },
  data: () => ({
    list: [
      {
        label: "a1",
        value: 1,
        children: [
          {
            label: "a1-1",
            value: 2,
            pid: 1,
            children: [
              {
                label: "a1-1-1",
                value: 3,
                pid: 2,
                children: [],
              },
              {
                label: "a1-1-2",
                value: 6,
                pid: 2,
                children: [],
              },
            ],
          },
          {
            label: "a1-2",
            value: 7,
            pid: 1,
            children: [
              {
                label: "a1-2-1",
                value: 8,
                pid: 7,
                children: [],
              },
              {
                label: "a1-2-2",
                value: 9,
                pid: 7,
                children: [],
              },
            ],
          },
        ],
      },
      {
        label: "b1",
        value: 4,
        children: [
          {
            label: "b1-1",
            value: 5,
            pid: 4,
            children: [],
          },
        ],
      },
    ],
    treeArr: [],
  }),
  methods:{
    handleGet() {
        console.log(this.treeArr);
    }
  }
};
</script>

<style></style>
