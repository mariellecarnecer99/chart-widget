import { defineCustomElementWrapped } from './defineCustomElementWrapped'

import MyCustomElement from './MyCustomElement.ce.vue'

const ceMyCustomElement = defineCustomElementWrapped(MyCustomElement)

customElements.define('my-custom-element', ceMyCustomElement)
