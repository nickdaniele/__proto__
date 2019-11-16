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
		console.log('/// about ///');
		console.log(this.sectionSelected);

		return html`
			<div class="p-2">About</div>
		`;
	}
}

customElements.define('section-about', About);
