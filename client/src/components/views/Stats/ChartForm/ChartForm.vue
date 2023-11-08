<template>
  <div class="chartWrap">
    <LineChart></LineChart>
    <DonutChart></DonutChart>
  </div>
</template>

<script lang="ts" setup>
import LineChart from "@/components/views/Stats/ChartForm/LineChart/LineChart.vue";
import DonutChart from "@/components/views/Stats/ChartForm/DonutChart/DonutChart.vue";
</script>

<style lang="scss">
@import "./ChartForm.scss";
</style>
