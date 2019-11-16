import { LitElement, html } from 'lit-element';

class Blog extends LitElement {
	static get properties() {
		return {
			sectionSelected: { type: String }
		};
	}

	createRenderRoot() {
		return this;
	}

	render() {
		console.log('/// blog ///');
		console.log(this.sectionSelected);

		return html`
			<div class="p-2">Blog</div>
		`;
	}
}

customElements.define('section-blog', Blog);
