import { LitElement, html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

class Main extends LitElement {
	static get properties() {
		return {
			rowOneClasses: { type: Object },
			rowTwoClasses: { type: Object },
			aboutClasses: { type: Object },
			tutorialClasses: { type: Object },
			blogClasses: { type: Object },
			socialClasses: { type: Object }
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
		return html`
			<main class="flex flex-wrap h-custom">
				<div class="${classMap(this.rowOneClasses)}">
					<div
						class="${classMap(this.aboutClasses)}"
						@click="${() => {
							this.sectionSelect('about');
						}}"
					>
						<div class="p-2">About</div>
					</div>
					<div
						class="${classMap(this.tutorialClasses)}"
						@click="${() => {
							this.sectionSelect('tutorial');
						}}"
					>
						<div class="p-2">Tutorials</div>
					</div>
				</div>
				<div class="${classMap(this.rowTwoClasses)}">
					<div
						class="${classMap(this.blogClasses)}"
						@click="${() => {
							this.sectionSelect('blog');
						}}"
					>
						<div class="p-2">Blog</div>
					</div>
					<div
						class="${classMap(this.socialClasses)}"
						@click="${() => {
							this.sectionSelect('social');
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
