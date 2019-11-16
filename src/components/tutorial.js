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
		console.log('/// tutorial ///');
		console.log(this.sectionSelected);

		return html`
			<div class="p-2">Tutorials</div>
		`;
	}
}

customElements.define('section-tutorial', Tutorial);
