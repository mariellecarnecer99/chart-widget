/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

import VueGridLayout from 'vue-grid-layout'

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
import { createApp, defineCustomElement } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

// import Hello from '@/components/HelloWorld.vue';
import Hello from '@/chartdata/SampleChart.vue'

// register
customElements.define('chart-widget', defineCustomElement(Hello))

// const MyVueElement = defineCustomElement({
//   // normal Vue component options here
//   props: {
//   },
//   emits: {},
//   template: `<div id="chart-container" class="embedChart" style="height:500px;"></div>`,

//   // defineCustomElement only: CSS to be injected into shadow root
//   styles: [`div { height: 500px; }`],
  
// })

// customElements.define('chart-widget', MyVueElement)

const app = createApp(App)

// register globally (or you can do it locally)
app.component('v-chart', ECharts)

// app.customElement('vue-widget', App)
registerPlugins(app)

app.use(VueGridLayout).mount('#app')
