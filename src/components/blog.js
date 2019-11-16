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
						<div class="px-2">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
							odio justo, condimentum sed auctor et, auctor a ligula. Duis leo
							diam, maximus ac pulvinar in, tristique non est. Fusce tortor
							arcu, bibendum id diam in, hendrerit tincidunt nisl. Maecenas quis
							fringilla tortor. Nulla suscipit cursus condimentum. Nullam
							iaculis dignissim dolor nec efficitur. Sed vel nisl nec nisi
							molestie semper. Donec euismod a massa ut volutpat. Morbi accumsan
							ultrices porta. Quisque auctor, leo et iaculis blandit, mauris ex
							maximus purus, quis aliquam arcu justo ac leo. Proin tempus, felis
							ut sollicitudin sodales, augue metus interdum urna, vitae
							efficitur lacus eros vel urna. Praesent tempus ligula sit amet
							neque sollicitudin porttitor. Vivamus placerat dui id venenatis
							accumsan. Fusce dictum facilisis urna non rhoncus. Aenean in odio
							lectus. Donec eu magna ac dolor sollicitudin tempus. Ut mollis
							pellentesque fermentum. Vestibulum ante ipsum primis in faucibus
							orci luctus et ultrices posuere cubilia Curae; Sed tristique metus
							in felis dignissim, a pulvinar sapien tristique. Vivamus nec ante
							a eros malesuada mollis non at mi. Orci varius natoque penatibus
							et magnis dis parturient montes, nascetur ridiculus mus. Mauris
							consectetur scelerisque leo, eget posuere enim commodo quis. Sed
							eleifend porta bibendum.
						</div>
				  `
				: null}
		`;
	}
}

customElements.define('section-blog', Blog);
