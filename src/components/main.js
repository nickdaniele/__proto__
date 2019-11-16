import { LitElement, html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

class Main extends LitElement {
	static get properties() {
		return {
			rowOneClasses: { type: Object },
			rowTwoClasses: { type: Object },
			sectionOneClasses: { type: Object },
			sectionTwoClasses: { type: Object },
			sectionThreeClasses: { type: Object },
			sectionFourClasses: { type: Object }
		};
	}

	sectionSelect(section) {
		this.dispatchEvent(
			new CustomEvent('section-select', {
				detail: { section }
			})
		);
	}

	createRenderRoot() {
		return this;
	}

	render() {
		const rowOneClasses = classMap(this.rowOneClasses);
		const rowTwoClasses = classMap(this.rowTwoClasses);
		const sectionOneClasses = classMap(this.sectionOneClasses);
		const sectionTwoClasses = classMap(this.sectionTwoClasses);
		const sectionThreeClasses = classMap(this.sectionThreeClasses);
		const sectionFourClasses = classMap(this.sectionFourClasses);

		return html`
			<main class="flex flex-wrap h-custom">
				<div class="${rowOneClasses}">
					<div
						class="${sectionOneClasses}"
						@click="${() => {
							this.sectionSelect('one');
						}}"
					>
						<div class="p-2">About</div>
					</div>
					<div
						class="${sectionTwoClasses}"
						@click="${() => {
							this.sectionSelect('two');
						}}"
					>
						<div class="p-2">Tutorials</div>
					</div>
				</div>
				<div class="${rowTwoClasses}">
					<div
						class="${sectionThreeClasses}"
						@click="${() => {
							this.sectionSelect('three');
						}}"
					>
						<div class="p-2">Blog</div>
					</div>
					<div
						class="${sectionFourClasses}"
						@click="${() => {
							this.sectionSelect('four');
						}}"
					>
						<div class="p-2">Social</div>
					</div>
				</div>
			</main>
		`;
	}
}

customElements.define('app-main', Main);
