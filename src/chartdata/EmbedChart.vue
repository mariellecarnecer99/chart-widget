<template>
  <div id="embedChart" style="width: 600px; height: 400px"></div>
</template>

<script setup>
import * as echarts from "echarts/core";

// Create the echarts instance
var myChart = echarts.init(document.getElementById("embedChart"));

var option = {
  title: {
    text: "ECharts ",
  },
  tooltip: {},
  legend: {
    data: ["aa"],
  },
  xAxis: {
    data: ["aa", "bb", "cc", "dd", "ee", "ff"],
  },
  yAxis: {},
  series: [
    {
      name: "rr",
      type: "bar",
      data: [5, 20, 36, 10, 10, 20],
    },
  ],
};

// Draw the chart
myChart.setOption(option);
</script>
