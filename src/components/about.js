import { LitElement, html } from 'lit-element';

class About extends LitElement {
  static get properties() {
    return {
      sectionSelected: { type: String }
    };
  }

  createRenderRoot() {
    return this;
  }

  render() {
    const selected = this.sectionSelected === 'about';

    return html`
      <div class="p-2">
        <h2 class="pb-2">About</h2>
        ${selected
        ? html`
              <div></div>
            `
        : null}
      </div>
    `;
  }
}

customElements.define('section-about', About);
