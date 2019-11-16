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
		const selected = this.sectionSelected === 'blog';

		return html`
			<div class="p-2">Blog</div>
			${selected
				? html`
						<div class="px-2"></div>
				  `
				: null}
		`;
	}
}

customElements.define('section-blog', Blog);
