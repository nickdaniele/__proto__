import { LitElement, html } from 'lit-element';

class Social extends LitElement {
	static get properties() {
		return {
			sectionSelected: { type: String }
		};
	}

	createRenderRoot() {
		return this;
	}

	render() {
		console.log('/// social ///');
		console.log(this.sectionSelected);

		return html`
			<div class="p-2">Social</div>
		`;
	}
}

customElements.define('section-social', Social);
