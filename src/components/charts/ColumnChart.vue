<template>
  <v-chart class="chart" :option="option" autoresize />
</template>

<script setup>
import { use } from 'echarts/core'
import { CanvasRenderer, SVGRenderer } from 'echarts/renderers'
import { BarChart } from 'echarts/charts'
import {
  GridComponent,
  LegendComponent,
  TooltipComponent,
  DatasetComponent
} from 'echarts/components'
import VChart, { THEME_KEY } from 'vue-echarts'
import { ref, provide } from 'vue'

use([
  BarChart,
  CanvasRenderer,
  SVGRenderer,
  GridComponent,
  LegendComponent,
  TooltipComponent,
  DatasetComponent
])

provide(THEME_KEY, 'light')

const option = ref({
  legend: {},
  tooltip: {},
  dataset: {
    source: [
      ['product', '2012', '2013', '2014', '2015'],
      ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
      ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
      ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]
    ]
  },
  xAxis: [
    { type: 'category', gridIndex: 0 },
    { type: 'category', gridIndex: 1 }
  ],
  yAxis: [{ gridIndex: 0 }, { gridIndex: 1 }],
  grid: [{ bottom: '55%' }, { top: '55%' }],
  series: [
    // These series are in the first grid.
    { type: 'bar', seriesLayoutBy: 'row' },
    { type: 'bar', seriesLayoutBy: 'row' },
    { type: 'bar', seriesLayoutBy: 'row' },
    // These series are in the second grid.
    { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
    { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
    { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
    { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 }
  ]
})
</script>

<style scoped>
.chart {
  height: 100vh;
}
</style>
