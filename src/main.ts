/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

import VueGridLayout from 'vue-grid-layout'
import vueCustomElement from 'vue-custom-element'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)
// app.customElement('vue-widget', App)
registerPlugins(app)

app.use(VueGridLayout, vueCustomElement).mount('#app')
