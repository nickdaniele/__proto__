import { LitElement, html } from 'lit-element';

class Social extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <ul>
        <li class="cursor-default hover:underline">
          &lt will get to this maybe never &gt
        </li>
        <li class="cursor-default hover:underline">
          &lt will get to this maybe never &gt
        </li>
        <li class="cursor-default hover:underline">
          &lt will get to this maybe never &gt
        </li>
      </ul>
    `;
  }
}

customElements.define('section-uncategorized', Social);
