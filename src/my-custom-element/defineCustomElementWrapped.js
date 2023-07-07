import { createApp, h, defineCustomElement, getCurrentInstance } from 'vue'
import MyElement from '@/my-custom-element/MyElement.vue'

export const defineCustomElementWrapped = (component, { plugins = [] } = {}) =>
  defineCustomElement({
    props: component.props,
    styles: component.styles,
    render() {
      return h(component, this.$props)
    },
    setup() {
      const app = createApp()

      // and registering components....
      app.component('MyElement', MyElement)

      // install plugins
      plugins.forEach(app.use)

      const inst = getCurrentInstance()
      Object.assign(inst.appContext, app._context)
      Object.assign(inst.provides, app._context.provides)
    },
  })
