<template>
  <apexchart
    type="line"
    height="350"
    width="600"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useStore } from "vuex";
import dayjs from "dayjs";
import { todo } from "@/@types/index";

const store = useStore();
const data = computed(() => store.state.todos);
// 오늘로부터 7일 전의 날짜 계산
const sevenDaysAgo = dayjs().subtract(7, "day");

// createDate가 오늘로부터 7일 전까지인 데이터 필터링
const filteredData = data.value.filter((item: todo) =>
  dayjs(item.createDate).isAfter(sevenDaysAgo),
);

// series와 xaxis 데이터 생성
const seriesData: any[] = [];
const xaxisData: any = { categories: [] };

// 오늘부터 7일 전까지의 날짜를 xaxis에 추가
for (let i = 6; i >= 0; i--) {
  const date: string = dayjs().subtract(i, "day").format("YYYY-MM-DD");
  xaxisData.categories.push(date);

  if (data.value.length > 0) {
    // 해당 날짜에 있는 데이터를 찾아서 series에 추가
    const matchingData = filteredData.filter(
      (item: todo) => dayjs(item.createDate).format("YYYY-MM-DD") === date,
    );
    if (matchingData.length > 0) {
      // 해당 날짜에 해당하는 todo의 수를 계산하여 series에 추가
      const todoCount = matchingData.length;
      seriesData.push(todoCount);
    } else {
      // 해당 날짜에 데이터가 없으면 0으로 채웁니다.
      seriesData.push(0);
    }
  }
}

const series = ref([
  {
    name: "Todo 갯수",
    data: seriesData,
  },
]);
const chartOptions = ref({
  chart: {
    height: 350,
    type: "line",
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
  },
  grid: {
    row: {
      colors: ["#f3f3f3"], // takes an array which will be repeated on columns
      opacity: 0.5,
    },
  },

  tooltip: {
    y: {
      formatter: (e: any) => parseInt(e), // 툴팁에만 영향을 미치도록 소수점 제거
    },
  },
  yAxis: {
    labels: {
      show: false,
    },
  },
  noData: {
    text: "no data",
    align: "center",
    verticalAlign: "middle",
    offsetX: 0,
    offsetY: 0,
    style: {
      color: undefined,
      fontSize: "14px",
      fontFamily: undefined,
    },
  },
  xaxis: {
    categories: xaxisData.categories,
  },
});
</script>

<style lang="scss">
@import "./LineChart.scss";
</style>
