import { LitElement, html } from 'lit-element';

class Header extends LitElement {
	createRenderRoot() {
		return this;
	}

	render() {
		return html`
			<header class="py-4 text-center border-b border-solid border-black">
				<div class="inline-block cursor-pointer">__proto__</div>
			</header>
		`;
	}
}

customElements.define('app-header', Header);
