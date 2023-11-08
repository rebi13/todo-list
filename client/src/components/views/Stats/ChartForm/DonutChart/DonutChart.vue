<template>
  <div id="donutChart"></div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import * as d3 from "d3";

const data = [
  { country: "USA", value: 20.5 },
  { country: "China", value: 13.4 },
  { country: "Germany", value: 4.0 },
  { country: "Japan", value: 4.9 },
  { country: "France", value: 2.8 },
];

const width = 200;
const height = 200;
const radius = Math.min(width, height) / 2;

onMounted(() => {
  const svg = d3
    .select("#donutChart")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", `translate(${width / 2},${height / 2})`);

  const color = d3.scaleOrdinal(d3.schemeCategory10);

  const pie = d3.pie<{ value: number }>().value((d) => d.value as number);
  // const pie = d3.pie().value((d: any) => d.value);

  const arc = d3.arc().innerRadius(50).outerRadius(radius);
  const arcs = svg
    .selectAll("arc")
    .data(pie(data))
    .enter()
    .append("g")
    .attr("class", "arc");

  arcs
    .append("path")
    .attr("d", arc as any)
    .attr("fill", (d: any, i: any) => color(String(i)))
    .attr("stroke", "white")
    .style("stroke-width", "2px");

  arcs
    .append("text")
    .attr("transform", (d: any) => `translate(${arc.centroid(d)})`)
    .attr("text-anchor", "middle")
    .text((d: any) => d.data.country);
});
</script>
