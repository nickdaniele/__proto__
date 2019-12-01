import { LitElement, html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

import marked from 'marked';

class Modal extends LitElement {
  // Custom Methods //////////////////
  close() {
    this.dispatchEvent(new CustomEvent('close'));
  }

  updatedClasses() {
    if (this.modalStatus === 'open') {
      this.modalClasses = {
        ...this.modalClasses,
        ...{ block: true, hidden: false }
      };
    } else {
      this.modalClasses = {
        ...this.modalClasses,
        ...{ block: false, hidden: true }
      };
    }
  }

  // Built In Methods /////////////////
  static get properties() {
    return {
      modalStatus: { type: String },
      modalClasses: { type: Object }
    };
  }

  constructor() {
    super();

    this.modalClasses = {
      'block': false,
      'hidden': true,
      'fixed': true,
      'z-10': true,
      'left-0': true,
      'top-0': true,
      'w-full': true,
      'h-full': true,
      'overflow-scroll': true,
      'bg-white': true
    };
  }

  updated() {
    const content = document.getElementById('content');

    content.innerHTML = marked(
      '# Marked in the browser\n\nRendered by **marked**.'
    );
  }

  createRenderRoot() {
    return this;
  }

  render() {
    this.updatedClasses();

    return html`
      <div class="${classMap(this.modalClasses)}">
        <div class="mx-2">
          <div
            class="w-custom fixed text-right text-3xl bg-white cursor-pointer"
            @click="${() => {
        this.close();
      }}"
          >
            X
          </div>
          <div id="content" class="pt-12 overflow-scroll"></div>
        </div>
      </div>
    `;
  }
}

customElements.define('app-modal', Modal);
