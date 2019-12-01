import { LitElement, html } from 'lit-element';

class Social extends LitElement {
  static get properties() {
    return {
      sectionSelected: { type: String }
    };
  }

  createRenderRoot() {
    return this;
  }

  render() {
    const selected = this.sectionSelected === 'social';

    return html`
      <div class="p-2">
        <h2 class="pb-2">Social</h2>
        ${selected
        ? html`
              <ul>
                <li class="cursor-pointer hover:underline">
                  &lt Coming Soon &gt
                </li>
                <li class="cursor-pointer hover:underline">
                  &lt Coming Soon &gt
                </li>
                <li class="cursor-pointer hover:underline">
                  &lt Coming Soon &gt
                </li>
              </ul>
            `
        : null}
      </div>
    `;
  }
}

customElements.define('section-social', Social);
