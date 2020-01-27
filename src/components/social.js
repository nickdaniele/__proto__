import { LitElement, html } from 'lit-element';

class Social extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
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
    `;
  }
}

customElements.define('section-social', Social);
