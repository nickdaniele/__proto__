import './header';
import './main';

import { LitElement, html } from 'lit-element';

class App extends LitElement {
	sectionSelect(event) {
		const section = event.detail.section;
		console.log(section);
	}

	createRenderRoot() {
		return this;
	}

	render() {
		return html`
			<div class="h-full">
				<app-header></app-header>
				<app-main
					@section-select="${event => {
						this.sectionSelect(event);
					}}"
				></app-main>
			</div>
		`;
	}
}

customElements.define('app-root', App);
