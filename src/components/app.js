import { LitElement, html } from 'lit-element';

import './header';
import './main';

class App extends LitElement {
	static get properties() {
		return {
			sectionSelected: { type: String }
		};
	}

	constructor() {
		super();

		this.sectionSelected = 'none';
	}

	sectionSelect(event) {
		this.sectionSelected = event.detail.section;
	}

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
				></app-main>
			</div>
		`;
	}
}

customElements.define('app-root', App);
