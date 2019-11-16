import './header';
import './main';

import { LitElement, html } from 'lit-element';

class App extends LitElement {
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

	sectionSelect(event) {
		const section = event.detail.section;

		/**
		 * Enable h-inherit of expanded row.
		 * Disable h-52px of expanded row.
		 * Disable h-inherit of collapsed row.
		 * Enable h-52px of collapsed row.
		 * Enable flex-grow of clicked section.
		 * Disable w-1/2 of clicked section.
		 * Disable hover:bg-[color] of clicked section.
		 * Disable cursor-pointer of clicked section.
		 * Disable flex-grow of not clicked section of same row.
		 * Disable w-1/2 of not clicked section of same row.
		 * Enable hover:bg-[color] of not clicked section of same row.
		 * Enable cursor-pointer of not clicked section of same row.
		 * Enable w-1/2 of not clicked sections of different row.
		 * Enable hover:bg-[color] of not clicked sections of different row.
		 * Enable cursor-pointer of not clicked sections of different row.
		 */

		switch (section) {
			case '__proto__':
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
				break;
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
					...{
						'flex-grow': true,
						'w-1/2': false,
						'hover:bg-orange': false,
						'cursor-pointer': false
					}
				};

				this.tutorialClasses = {
					...this.tutorialClasses,
					...{
						'flex-grow': false,
						'w-1/2': false,
						'hover:bg-yellow': true,
						'cursor-pointer': true
					}
				};

				this.blogClasses = {
					...this.blogClasses,
					...{ 'w-1/2': true, 'hover:bg-green': true, 'cursor-pointer': true }
				};

				this.socialClasses = {
					...this.socialClasses,
					...{ 'w-1/2': true, 'hover:bg-blue': true, 'cursor-pointer': true }
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
					...{
						'flex-grow': false,
						'w-1/2': false,
						'hover:bg-orange': true,
						'cursor-pointer': true
					}
				};

				this.tutorialClasses = {
					...this.tutorialClasses,
					...{
						'flex-grow': true,
						'w-1/2': false,
						'hover:bg-yellow': false,
						'cursor-pointer': false
					}
				};

				this.blogClasses = {
					...this.blogClasses,
					...{ 'w-1/2': true, 'hover:bg-green': true, 'cursor-pointer': true }
				};

				this.socialClasses = {
					...this.socialClasses,
					...{ 'w-1/2': true, 'hover:bg-blue': true, 'cursor-pointer': true }
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
					...{ 'w-1/2': true, 'hover:bg-orange': true, 'cursor-pointer': true }
				};

				this.tutorialClasses = {
					...this.tutorialClasses,
					...{ 'w-1/2': true, 'hover:bg-yellow': true, 'cursor-pointer': true }
				};

				this.blogClasses = {
					...this.blogClasses,
					...{
						'flex-grow': true,
						'w-1/2': false,
						'hover:bg-green': false,
						'cursor-pointer': false
					}
				};

				this.socialClasses = {
					...this.socialClasses,
					...{
						'flex-grow': false,
						'w-1/2': false,
						'hover:bg-blue': true,
						'cursor-pointer': true
					}
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
					...{ 'w-1/2': true, 'hover:bg-orange': true, 'cursor-pointer': true }
				};

				this.tutorialClasses = {
					...this.tutorialClasses,
					...{ 'w-1/2': true, 'hover:bg-yellow': true, 'cursor-pointer': true }
				};

				this.blogClasses = {
					...this.blogClasses,
					...{
						'flex-grow': false,
						'w-1/2': false,
						'hover:bg-green': true,
						'cursor-pointer': true
					}
				};

				this.socialClasses = {
					...this.socialClasses,
					...{
						'flex-grow': true,
						'w-1/2': false,
						'hover:bg-blue': false,
						'cursor-pointer': false
					}
				};
				break;
		}
	}

	createRenderRoot() {
		return this;
	}

	render() {
		return html`
			<div class="h-full">
				<app-header
					@section-select="${event => {
						this.sectionSelect(event);
					}}"
				></app-header>
				<app-main
					rowOneClasses="${JSON.stringify(this.rowOneClasses)}"
					rowTwoClasses="${JSON.stringify(this.rowTwoClasses)}"
					aboutClasses="${JSON.stringify(this.aboutClasses)}"
					tutorialClasses="${JSON.stringify(this.tutorialClasses)}"
					blogClasses="${JSON.stringify(this.blogClasses)}"
					socialClasses="${JSON.stringify(this.socialClasses)}"
					@section-select="${event => {
						this.sectionSelect(event);
					}}"
				></app-main>
			</div>
		`;
	}
}

customElements.define('app-root', App);
