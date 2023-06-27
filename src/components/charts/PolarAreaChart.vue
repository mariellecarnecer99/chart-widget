<template>
  <v-chart class="chart" :option="option" autoresize />
</template>

<script setup>
import { use } from "echarts/core";
import { CanvasRenderer, SVGRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  LegendComponent,
  TooltipComponent,
  PolarComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, provide } from "vue";

use([
  LineChart,
  CanvasRenderer,
  SVGRenderer,
  TitleComponent,
  LegendComponent,
  TooltipComponent,
  PolarComponent,
]);

provide(THEME_KEY, "light");

const data = [];
for (let i = 0; i <= 360; i++) {
  let t = (i / 180) * Math.PI;
  let r = Math.sin(2 * t) * Math.cos(2 * t);
  data.push([r, i]);
}

const option = ref({
  title: {
    text: "Two Value-Axes in Polar",
  },
  legend: {
    data: ["line"],
  },
  polar: {
    center: ["50%", "54%"],
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
    },
  },
  angleAxis: {
    type: "value",
    startAngle: 0,
  },
  radiusAxis: {
    min: 0,
  },
  series: [
    {
      coordinateSystem: "polar",
      name: "line",
      type: "line",
      showSymbol: false,
      data: data,
    },
  ],
  animationDuration: 2000,
});
</script>

<style scoped>
.chart {
  height: 100vh;
}
</style>
