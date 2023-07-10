customElements.define('chart-widget',
  class extends HTMLElement {
    constructor() {
      super();

      const template = document.getElementById('chart-widget');
      const templateContent = template.content;

      this.attachShadow({mode: 'open'}).appendChild(
        templateContent.cloneNode(true)
      );
    }
  }
);

const slottedSpan = document.querySelector('chart-widget span');