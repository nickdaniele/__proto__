import { LitElement, html } from 'lit-element';

class App extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <p>Hello World!</p>
    `;
  }
}

customElements.define('app-root', App);
