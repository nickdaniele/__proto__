import './header';
import './main';

import { LitElement, html } from 'lit-element';

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
		const sectionSelected = this.sectionSelected;

		return html`
			<div class="h-full">
				<app-header
					@section-select="${event => {
						this.sectionSelect(event);
					}}"
				></app-header>
				<app-main
					sectionSelected="${sectionSelected}"
					@section-select="${event => {
						this.sectionSelect(event);
					}}"
				></app-main>
			</div>
		`;
	}
}

customElements.define('app-root', App);
