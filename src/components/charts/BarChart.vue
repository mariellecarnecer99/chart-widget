<template>
  <v-chart class="chart" :option="option" autoresize />
</template>

<script setup>
import { use } from 'echarts/core'
import { CanvasRenderer, SVGRenderer } from 'echarts/renderers'
import { BarChart } from 'echarts/charts'
import { GridComponent } from 'echarts/components'
import VChart, { THEME_KEY } from 'vue-echarts'
import { ref, provide } from 'vue'

use([BarChart, CanvasRenderer, SVGRenderer, GridComponent])

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
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      }
    }
  ]
})
</script>

<style scoped>
.chart {
  height: 100vh;
}
</style>
