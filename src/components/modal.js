import { LitElement, html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

import './about';
import './tutorial';
import './blog';
import './social';

class Modal extends LitElement {
  static get properties() {
    return {
      displayModal: { type: Boolean },
      modalClasses: { type: Object }
    };
  }

  constructor() {
    super();

    this.modalClasses = {
      block: false,
      hidden: true,
      fixed: true,
      'z-10': true,
      'left-0': true,
      'top-0': true,
      'w-full': true,
      'h-full': true,
      'overflow-scroll': true,
      'bg-white': true
    };
  }

  close() {
    this.dispatchEvent(
      new CustomEvent('close', {
        detail: { close: true }
      })
    );
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="${classMap(this.modalClasses)}">lorem upsum</div>
    `;
  }
}

customElements.define('app-modal', Modal);
