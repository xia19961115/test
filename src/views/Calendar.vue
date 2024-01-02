<template>
  <div>
    <el-calendar 
      :first-day-of-week="7"
      :value="value"
    >

    <!-- date 返回的是日期 Tue Jan 02 2024 08:00:00 GMT+0800 (中国标准时间) -->
    <!-- data 返回的数据格式 {"isSelected": true, "type": "current-month", "day": "2024-01-02"} -->
      <template #dateCell={date,data}>
        <!-- {{data}} -->
        {{
            parseInt(
              data.day
                .split('-')
                .slice(2)
                .join('-')
            )
          }}
          <div v-if="new Date(data.day).getMonth() == new Date(value).getMonth()">

            {{'自定义内容'}}
          </div>
      </template>
    </el-calendar>
  </div>
</template>

<script>
export default {
    data() {
        return {
            value: new Date()
        }
    }
}
</script>

<style lang="scss" scoped>
::v-deep .el-calendar__header{
    display: none;
}
</style>