import { LitElement, html } from 'lit-element';

import './header';
import './main';
import './modal';

class App extends LitElement {
  static get properties() {
    return {
      sectionSelected: { type: String },
      modalStatus: { type: String }
    };
  }

  constructor() {
    super();

    this.sectionSelected = 'none';
    this.modalStatus = 'closed';
  }

  // Events Handlers //////////////////
  sectionSelect(event) {
    this.sectionSelected = event.detail.section;
  }

  contentSelect(event) {
    console.log('/// contentSelect ///');
    console.log(event);
  }

  modalChange(status) {
    this.modalStatus = status;
  }
  /////////////////////////////////////

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="h-full">
        <app-header
          @section-select="${event => {
        this.sectionSelect(event);
      }}"
        ></app-header>
        <app-main
          sectionSelected="${this.sectionSelected}"
          @section-select="${event => {
        this.sectionSelect(event);
      }}"
          @content-select="${event => {
        this.contentSelect(event);
        this.modalChange('open');
      }}"
        ></app-main>
        <app-modal
          modalStatus="${this.modalStatus}"
          @close="${() => {
        this.modalChange('close');
      }}"
        ></app-modal>
      </div>
    `;
  }
}

customElements.define('app-root', App);
