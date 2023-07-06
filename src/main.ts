/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

import VueGridLayout from 'vue-grid-layout'

import vueCustomElement from 'vue-custom-element'

import ECharts from 'vue-echarts'
import { use } from "echarts/core"
import {
  CanvasRenderer
} from 'echarts/renderers'
import {
    BarChart, LineChart, PieChart, ScatterChart
} from 'echarts/charts'
import {
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent,
    LegendComponent,
    ToolboxComponent,
} from 'echarts/components'

use([
  CanvasRenderer,
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
])

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

// register globally (or you can do it locally)
app.component('v-chart', ECharts)

// app.customElement('vue-widget', App)
registerPlugins(app)

app.use(VueGridLayout, vueCustomElement).mount('#app')
