import { LitElement, html } from 'lit-element';

class Main extends LitElement {
	createRenderRoot() {
		return this;
	}

	render() {
		return html`
			<main class="flex flex-wrap h-custom">
				<div class="flex-grow flex-auto w-1/2">1</div>
				<div class="flex-grow flex-auto w-1/2">2</div>
				<div class="flex-grow flex-auto w-1/2">3</div>
				<div class="flex-grow flex-auto w-1/2">4</div>
			</main>
		`;
	}
}

customElements.define('app-main', Main);
