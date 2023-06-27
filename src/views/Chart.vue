<template>
  <div>
    <ColumnChart v-if="chart?.value === 'column'" />
    <LineChart v-if="chart?.value === 'line'" />
    <BarChart v-if="chart?.value === 'bar'" />
    <PieChart v-if="chart?.value === 'pie'" />
    <DoughnutChart v-if="chart?.value === 'doughnut'" />
    <RadarChart v-if="chart?.value === 'radar'" />
    <PolarAreaChart v-if="chart?.value === 'polarArea'" />
    <ScatterChart v-if="chart?.value === 'scatter'" />
  </div>
</template>

<script setup>
import ColumnChart from "@/components/charts/ColumnChart.vue";
import LineChart from "@/components/charts/LineChart.vue";
import BarChart from "@/components/charts/BarChart.vue";
import PieChart from "@/components/charts/PieChart.vue";
import DoughnutChart from "@/components/charts/DoughnutChart.vue";
import RadarChart from "@/components/charts/RadarChart.vue";
import PolarAreaChart from "@/components/charts/PolarAreaChart.vue";
import ScatterChart from "@/components/charts/ScatterChart.vue";
const props = defineProps({
  chart: Object,
});
</script>
