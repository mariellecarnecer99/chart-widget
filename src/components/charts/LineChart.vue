<template>
  <v-chart class="chart" :option="option" autoresize />
</template>

<script setup>
import { use } from 'echarts/core'
import { CanvasRenderer, SVGRenderer } from 'echarts/renderers'
import { LineChart } from 'echarts/charts'
import { GridComponent } from 'echarts/components'
import VChart, { THEME_KEY } from 'vue-echarts'
import { ref, provide } from 'vue'

use([LineChart, CanvasRenderer, SVGRenderer, GridComponent])

provide(THEME_KEY, 'light')

const option = ref({
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
})
</script>

<style scoped>
.chart {
  height: 100vh;
}
</style>
