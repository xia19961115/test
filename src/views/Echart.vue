<template>
  <div>
    <!-- {{ arr }} -->
    <div class="my">
      <div class="mycharts" ref="main"></div>
    </div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  name: "Echart",
  data() {
    return {
      timer: null,
      count: 0,
      arr: [],
      option: {
        color: ["#2f89cf"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          left: "0%",
          top: "10px",
          right: "0%",
          bottom: "4%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: ["总计划数", "过期计划数", "未过期计划数"],
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "数量",
            type: "bar",
            barWidth: "25%",
            itemStyle: {
              borderRadius: [10, 10, 0, 0],
            },
            data: [],
          },
        ],
      },
      myChart:null
    };
  },
   mounted() {
    this.handleInit();
    this.handleRequest();
    this.handleDrawtop();
  },
  destroyed() {
    clearInterval(this.timer);
  },
  methods: {
    handleRequest() {
      this.timer = setInterval(async () => {
        if (this.count > 3) {
          clearInterval(this.timer);
          this.count = 0;
          this.handleInit();
          this.handleRequest();
        } else {
          let res = await this.$axios("http://127.0.0.1:5000/member");
          this.arr = res.data.list;
          this.$set(this.option.series[0], "data", res.data.list);
          console.log(this.option);
          this.myChart.setOption(this.option);
        //   console.log(this.myChart.setOption);
        }
        this.count++;
      }, 1000);
    },
    async handleInit() {
      let res = await this.$axios("http://127.0.0.1:5000/member");
      //   this.arr = res.data.list;
      this.$set(this.option.series, "data", res.data.list);
      this.myChart.setOption(this.option);
    },
    // 画图标
    handleDrawtop() {
      this.myChart = echarts.init(this.$refs.main);
      this.myChart.setOption(this.option);
      window.addEventListener("resize", function () {
        // this.myChart.resize();
      });
    },
  },
};
</script>
<style scoped>
.my {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
}
.mycharts {
  width: 400px;
  height: 400px;
}
</style>