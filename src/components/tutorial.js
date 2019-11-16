import { LitElement, html } from 'lit-element';

class Tutorial extends LitElement {
	static get properties() {
		return {
			sectionSelected: { type: String }
		};
	}

	createRenderRoot() {
		return this;
	}

	render() {
		const selected = this.sectionSelected === 'tutorial';

		return html`
			<div class="p-2">Tutorials</div>
			${selected
				? html`
						<div class="px-2"></div>
				  `
				: null}
		`;
	}
}

customElements.define('section-tutorial', Tutorial);
