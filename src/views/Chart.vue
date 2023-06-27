<template>
  <div>
    <ColumnChart v-if="$route.query.chartType === 'column'" />
    <LineChart v-if="$route.query.chartType === 'line'" />
    <BarChart v-if="$route.query.chartType === 'bar'" />
    <PieChart v-if="$route.query.chartType === 'pie'" />
    <DoughnutChart v-if="$route.query.chartType === 'doughnut'" />
    <RadarChart v-if="$route.query.chartType === 'radar'" />
    <PolarAreaChart v-if="$route.query.chartType === 'polarArea'" />
    <ScatterChart v-if="$route.query.chartType === 'scatter'" />
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
</script>
