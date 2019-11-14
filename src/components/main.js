import { LitElement, html } from 'lit-element';

class Main extends LitElement {
	createRenderRoot() {
		return this;
	}

	render() {
		return html`
			<main class="flex flex-wrap h-custom">
				<div
					class="flex-grow flex-auto w-1/2 p-4 border-b border-r border-solid border-black"
				>
					About
				</div>
				<div
					class="flex-grow flex-auto w-1/2 p-4 border-b border-solid border-black"
				>
					Tutorials
				</div>
				<div
					class="flex-grow flex-auto w-1/2 p-4 border-r border-solid border-black"
				>
					Blog
				</div>
				<div class="flex-grow flex-auto w-1/2 p-4 border-solid border-black">
					Social
				</div>
			</main>
		`;
	}
}

customElements.define('app-main', Main);
