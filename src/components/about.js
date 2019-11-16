import { LitElement, html } from 'lit-element';

class About extends LitElement {
	static get properties() {
		return {
			sectionSelected: { type: String }
		};
	}

	createRenderRoot() {
		return this;
	}

	render() {
		const selected = this.sectionSelected === 'about';

		return html`
			<div class="p-2">About</div>
			${selected
				? html`
						<div class="px-2"></div>
				  `
				: null}
		`;
	}
}

customElements.define('section-about', About);
