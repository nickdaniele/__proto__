import { LitElement, html } from 'lit-element';

class Blog extends LitElement {
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

customElements.define('section-blog', Blog);
