<template>
  <div id="donutChart"></div>
</template>

<script setup lang="ts">
import { computed, onMounted, watch } from "vue";
import * as d3 from "d3";
import { useStore } from "vuex";
import { todo } from "@/@types/index";

const store = useStore();
const data = computed(() => store.state.todos);
const statusCounts: { [key: string]: number } = {};

data.value.forEach((item: todo) => {
  const status = item.status;
  statusCounts[status] = (statusCounts[status] || 0) + 1;
});

const chartData = Object.entries(statusCounts).map(([status, count]) => ({
  status: status,
  count: count,
}));

const width = 600;
const height = 350;
const radius = Math.min(width, height) / 2;

onMounted(() => {
  // watch for changes in the 'data' and update the chart
  watch(data, () => {
    setDonutChart();
  });

  // initial chart rendering
  setDonutChart();
});
const chartColor: any = {
  진행전: "red",
  진행중: "blue",
  완료: "green",
};
const setDonutChart = () => {
  const svg = d3
    .select("#donutChart")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", `translate(${width / 3},${height / 2})`);

  const pie = d3.pie<{ count: number }>().value((d) => d.count as number);

  const arc = d3.arc().innerRadius(50).outerRadius(radius);
  const arcs = svg
    .selectAll("arc")
    .data(pie(chartData))
    .enter()
    .append("g")
    .attr("class", "arc");

  arcs
    .append("path")
    .attr("d", arc as any)
    .attr("fill", (d: any) => chartColor[d.data.status])
    .attr("stroke", "white")
    .style("stroke-width", "2px");

  arcs
    .append("text")
    .attr("transform", (d: any) => `translate(${arc.centroid(d)})`)
    .attr("text-anchor", "middle")
    .text((d: any) => d.data.status)
    .style("fill", "white");

  // 범례 추가
  const legend = svg
    .selectAll(".legend")
    .data(chartData) // 수정된 부분
    .enter()
    .append("g")
    .attr("class", "legend")
    .attr("transform", (d, i) => `translate(-40,${i * 30})`);

  legend
    .append("rect")
    .attr("x", width / 2 + 10)
    .attr("y", (d, i) => i * 20)
    .attr("width", 18)
    .attr("height", 18)
    .style("fill", (d) => chartColor[d.status]); // 수정된 부분

  legend
    .append("text")
    .attr("x", width / 2 + 35)
    .attr("y", (d, i) => i * 20 + 9)
    .attr("dy", ".35em")
    .style("text-anchor", "start")
    .text((d: any) => d.status + " " + d.count + "개"); // 수정된 부분
};
</script>

<style lang="scss">
@import "./DonutChart.scss";
</style>
