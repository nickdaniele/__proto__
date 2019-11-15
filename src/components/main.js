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

	constructor() {
		super();

		this.rowOneClasses = {
			flex: true,
			'w-full': true,
			'h-inherit': false,
			'h-52px': false
		};

		this.rowTwoClasses = {
			flex: true,
			'w-full': true,
			'h-inherit': false,
			'h-52px': false
		};

		this.aboutClasses = {
			'w-1/2': true,
			'border-b': true,
			'border-r': true,
			'border-solid': true,
			'border-black': true,
			'hover:bg-orange': true,
			'cursor-pointer': true,
			'flex-grow': false
		};

		this.tutorialClasses = {
			'w-1/2': true,
			'border-b': true,
			'border-solid': true,
			'border-black': true,
			'hover:bg-yellow': true,
			'cursor-pointer': true,
			'flex-grow': false
		};

		this.blogClasses = {
			'w-1/2': true,
			'border-r': true,
			'border-solid': true,
			'border-black': true,
			'hover:bg-green': true,
			'cursor-pointer': true,
			'flex-grow': false
		};

		this.socialClasses = {
			'w-1/2': true,
			'hover:bg-blue': true,
			'cursor-pointer': true,
			'flex-grow': false
		};
	}

	selectSection(section) {
		/**
		 * Add h-inherit to expanded row.
		 * Add h-52px to collapsed row.
		 * Add flex-grow to clicked section
		 * Remove widths from all sections of row. (w-1/2)
		 */
		switch (section) {
			case 'about':
				this.rowOneClasses = {
					...this.rowOneClasses,
					...{ 'h-inherit': true, 'h-52px': false }
				};

				this.rowTwoClasses = {
					...this.rowTwoClasses,
					...{ 'h-inherit': false, 'h-52px': true }
				};

				this.aboutClasses = {
					...this.aboutClasses,
					...{ 'flex-grow': true, 'w-1/2': false }
				};

				this.tutorialClasses = {
					...this.tutorialClasses,
					...{ 'flex-grow': false, 'w-1/2': false }
				};

				this.blogClasses = {
					...this.blogClasses,
					...{ 'w-1/2': true }
				};

				this.socialClasses = {
					...this.socialClasses,
					...{ 'w-1/2': true }
				};
				break;
			case 'tutorial':
				this.rowOneClasses = {
					...this.rowOneClasses,
					...{ 'h-inherit': true, 'h-52px': false }
				};

				this.rowTwoClasses = {
					...this.rowTwoClasses,
					...{ 'h-inherit': false, 'h-52px': true }
				};

				this.aboutClasses = {
					...this.aboutClasses,
					...{ 'flex-grow': false, 'w-1/2': false }
				};

				this.tutorialClasses = {
					...this.tutorialClasses,
					...{ 'flex-grow': true, 'w-1/2': false }
				};

				this.blogClasses = {
					...this.blogClasses,
					...{ 'w-1/2': true }
				};

				this.socialClasses = {
					...this.socialClasses,
					...{ 'w-1/2': true }
				};
				break;
			case 'blog':
				this.rowOneClasses = {
					...this.rowOneClasses,
					...{ 'h-inherit': false, 'h-52px': true }
				};

				this.rowTwoClasses = {
					...this.rowTwoClasses,
					...{ 'h-inherit': true, 'h-52px': false }
				};

				this.aboutClasses = {
					...this.aboutClasses,
					...{ 'w-1/2': true }
				};

				this.tutorialsClasses = {
					...this.tutorialsClasses,
					...{ 'w-1/2': true }
				};

				this.blogClasses = {
					...this.blogClasses,
					...{ 'flex-grow': true, 'w-1/2': false }
				};

				this.socialClasses = {
					...this.socialClasses,
					...{ 'flex-grow': false, 'w-1/2': false }
				};
				break;
			case 'social':
				this.rowOneClasses = {
					...this.rowOneClasses,
					...{ 'h-inherit': false, 'h-52px': true }
				};

				this.rowTwoClasses = {
					...this.rowTwoClasses,
					...{ 'h-inherit': true, 'h-52px': false }
				};

				this.aboutClasses = {
					...this.aboutClasses,
					...{ 'w-1/2': true }
				};

				this.tutorialsClasses = {
					...this.tutorialsClasses,
					...{ 'w-1/2': true }
				};

				this.blogClasses = {
					...this.blogClasses,
					...{ 'flex-grow': false, 'w-1/2': false }
				};

				this.socialClasses = {
					...this.socialClasses,
					...{ 'flex-grow': true, 'w-1/2': false }
				};
				break;
		}
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
							this.selectSection('about');
						}}"
					>
						<div class="p-2">About</div>
					</div>
					<div
						class="${classMap(this.tutorialClasses)}"
						@click="${() => {
							this.selectSection('tutorial');
						}}"
					>
						<div class="p-2">Tutorials</div>
					</div>
				</div>
				<div class="${classMap(this.rowTwoClasses)}">
					<div
						class="${classMap(this.blogClasses)}"
						@click="${() => {
							this.selectSection('blog');
						}}"
					>
						<div class="p-2">Blog</div>
					</div>
					<div
						class="${classMap(this.socialClasses)}"
						@click="${() => {
							this.selectSection('social');
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
