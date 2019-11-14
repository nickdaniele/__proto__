import './header';
import './main';

import { LitElement, html } from 'lit-element';

class App extends LitElement {
	createRenderRoot() {
		return this;
	}

	render() {
		return html`
			<div class="h-full">
				<app-header></app-header>
				<app-main></app-main>
			</div>
		`;
	}
}

customElements.define('app-root', App);
