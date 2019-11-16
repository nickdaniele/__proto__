import { LitElement, html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

class Main extends LitElement {
	static get properties() {
		return {
			sectionSelected: { type: String },
			rowOneClasses: { type: Object },
			rowTwoClasses: { type: Object },
			sectionOneClasses: { type: Object },
			sectionTwoClasses: { type: Object },
			sectionThreeClasses: { type: Object },
			sectionFourClasses: { type: Object }
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

		this.sectionOneClasses = {
			'w-1/2': true,
			'border-b': true,
			'border-r': true,
			'border-solid': true,
			'border-black': true,
			'hover:bg-orange': true,
			'cursor-pointer': true,
			'flex-grow': false
		};

		this.sectionTwoClasses = {
			'w-1/2': true,
			'border-b': true,
			'border-solid': true,
			'border-black': true,
			'hover:bg-yellow': true,
			'cursor-pointer': true,
			'flex-grow': false
		};

		this.sectionThreeClasses = {
			'w-1/2': true,
			'border-r': true,
			'border-solid': true,
			'border-black': true,
			'hover:bg-green': true,
			'cursor-pointer': true,
			'flex-grow': false
		};

		this.sectionFourClasses = {
			'w-1/2': true,
			'hover:bg-blue': true,
			'cursor-pointer': true,
			'flex-grow': false
		};
	}

	sectionSelect(section) {
		this.dispatchEvent(
			new CustomEvent('section-select', {
				detail: { section }
			})
		);
	}

	updatedClasses() {
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

		const sectionSelected = this.sectionSelected;

		switch (sectionSelected) {
			case 'none':
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

				this.sectionOneClasses = {
					'w-1/2': true,
					'border-b': true,
					'border-r': true,
					'border-solid': true,
					'border-black': true,
					'hover:bg-orange': true,
					'cursor-pointer': true,
					'flex-grow': false
				};

				this.sectionTwoClasses = {
					'w-1/2': true,
					'border-b': true,
					'border-solid': true,
					'border-black': true,
					'hover:bg-yellow': true,
					'cursor-pointer': true,
					'flex-grow': false
				};

				this.sectionThreeClasses = {
					'w-1/2': true,
					'border-r': true,
					'border-solid': true,
					'border-black': true,
					'hover:bg-green': true,
					'cursor-pointer': true,
					'flex-grow': false
				};

				this.sectionFourClasses = {
					'w-1/2': true,
					'hover:bg-blue': true,
					'cursor-pointer': true,
					'flex-grow': false
				};
				break;
			case 'one':
				this.rowOneClasses = {
					...this.rowOneClasses,
					...{ 'h-inherit': true, 'h-52px': false }
				};

				this.rowTwoClasses = {
					...this.rowTwoClasses,
					...{ 'h-inherit': false, 'h-52px': true }
				};

				this.sectionOneClasses = {
					...this.sectionOneClasses,
					...{
						'flex-grow': true,
						'w-1/2': false,
						'hover:bg-orange': false,
						'cursor-pointer': false
					}
				};

				this.sectionTwoClasses = {
					...this.sectionTwoClasses,
					...{
						'flex-grow': false,
						'w-1/2': false,
						'hover:bg-yellow': true,
						'cursor-pointer': true
					}
				};

				this.sectionThreeClasses = {
					...this.sectionThreeClasses,
					...{ 'w-1/2': true, 'hover:bg-green': true, 'cursor-pointer': true }
				};

				this.sectionFourClasses = {
					...this.sectionFourClasses,
					...{ 'w-1/2': true, 'hover:bg-blue': true, 'cursor-pointer': true }
				};
				break;
			case 'two':
				this.rowOneClasses = {
					...this.rowOneClasses,
					...{ 'h-inherit': true, 'h-52px': false }
				};

				this.rowTwoClasses = {
					...this.rowTwoClasses,
					...{ 'h-inherit': false, 'h-52px': true }
				};

				this.sectionOneClasses = {
					...this.sectionOneClasses,
					...{
						'flex-grow': false,
						'w-1/2': false,
						'hover:bg-orange': true,
						'cursor-pointer': true
					}
				};

				this.sectionTwoClasses = {
					...this.sectionTwoClasses,
					...{
						'flex-grow': true,
						'w-1/2': false,
						'hover:bg-yellow': false,
						'cursor-pointer': false
					}
				};

				this.sectionThreeClasses = {
					...this.sectionThreeClasses,
					...{ 'w-1/2': true, 'hover:bg-green': true, 'cursor-pointer': true }
				};

				this.sectionFourClasses = {
					...this.sectionFourClasses,
					...{ 'w-1/2': true, 'hover:bg-blue': true, 'cursor-pointer': true }
				};
				break;
			case 'three':
				this.rowOneClasses = {
					...this.rowOneClasses,
					...{ 'h-inherit': false, 'h-52px': true }
				};

				this.rowTwoClasses = {
					...this.rowTwoClasses,
					...{ 'h-inherit': true, 'h-52px': false }
				};

				this.sectionOneClasses = {
					...this.sectionOneClasses,
					...{ 'w-1/2': true, 'hover:bg-orange': true, 'cursor-pointer': true }
				};

				this.sectionTwoClasses = {
					...this.sectionTwoClasses,
					...{ 'w-1/2': true, 'hover:bg-yellow': true, 'cursor-pointer': true }
				};

				this.sectionThreeClasses = {
					...this.sectionThreeClasses,
					...{
						'flex-grow': true,
						'w-1/2': false,
						'hover:bg-green': false,
						'cursor-pointer': false
					}
				};

				this.sectionFourClasses = {
					...this.sectionFourClasses,
					...{
						'flex-grow': false,
						'w-1/2': false,
						'hover:bg-blue': true,
						'cursor-pointer': true
					}
				};
				break;
			case 'four':
				this.rowOneClasses = {
					...this.rowOneClasses,
					...{ 'h-inherit': false, 'h-52px': true }
				};

				this.rowTwoClasses = {
					...this.rowTwoClasses,
					...{ 'h-inherit': true, 'h-52px': false }
				};

				this.sectionOneClasses = {
					...this.sectionOneClasses,
					...{ 'w-1/2': true, 'hover:bg-orange': true, 'cursor-pointer': true }
				};

				this.sectionTwoClasses = {
					...this.sectionTwoClasses,
					...{ 'w-1/2': true, 'hover:bg-yellow': true, 'cursor-pointer': true }
				};

				this.sectionThreeClasses = {
					...this.sectionThreeClasses,
					...{
						'flex-grow': false,
						'w-1/2': false,
						'hover:bg-green': true,
						'cursor-pointer': true
					}
				};

				this.sectionFourClasses = {
					...this.sectionFourClasses,
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
		this.updatedClasses();

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
