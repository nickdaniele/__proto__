import { LitElement, html } from 'lit-element';

class Tutorial extends LitElement {
  contentSelect() {
    this.dispatchEvent(
      new CustomEvent('content-select', {
        detail: { title: 'sometitle' }
      })
    );
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <ul>
        <li
          class="cursor-pointer hover:underline"
          @click="${() => {
            this.contentSelect();
          }}"
        >
          &lt Coming Soon &gt
        </li>
        <li
          class="cursor-pointer hover:underline"
          @click="${() => {
            this.contentSelect();
          }}"
        >
          &lt Coming Soon &gt
        </li>
        <li
          class="cursor-pointer hover:underline"
          @click="${() => {
            this.contentSelect();
          }}"
        >
          &lt Coming Soon &gt
        </li>
      </ul>
    `;
  }
}

customElements.define('section-tutorial', Tutorial);
