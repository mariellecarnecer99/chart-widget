<template>
  <v-chart class="chart" :option="option" autoresize />
</template>

<script setup>
import * as echarts from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart, LineChart, PieChart, ScatterChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent,
  ToolboxComponent,
} from "echarts/components";
import VChart from "vue-echarts";

const props = defineProps({
  option: Object,
});

// Register the required components
echarts.use([
  TitleComponent,
  LegendComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  ToolboxComponent,
  BarChart,
  LineChart,
  PieChart,
  ScatterChart,
  // LabelLayout,
  // UniversalTransition,
  CanvasRenderer,
]);
</script>
