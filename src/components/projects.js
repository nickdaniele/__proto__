import { LitElement, html } from 'lit-element';

class projects extends LitElement {
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

customElements.define('section-projects', projects);
