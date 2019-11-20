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
			<div class="p-2">
				<h2 class="pb-2">Tutorials</h2>
				${selected
					? html`
							<ul>
								<li class="cursor-pointer hover:underline">
									Some Post One
								</li>
								<li class="cursor-pointer hover:underline">
									Some Post Two
								</li>
								<li class="cursor-pointer hover:underline">
									Some Post Three
								</li>
							</ul>
					  `
					: null}
			</div>
		`;
	}
}

customElements.define('section-tutorial', Tutorial);
