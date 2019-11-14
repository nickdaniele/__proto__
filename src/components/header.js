import { LitElement, html } from 'lit-element';

class Header extends LitElement {
	createRenderRoot() {
		return this;
	}

	render() {
		return html`
			<header class="py-4 text-center border-b border-solid border-black">
				__proto__
			</header>
		`;
	}
}

customElements.define('app-header', Header);
