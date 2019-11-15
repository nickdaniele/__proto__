import { LitElement, html } from 'lit-element';

class Main extends LitElement {
	createRenderRoot() {
		return this;
	}

	render() {
		return html`
			<main class="flex flex-wrap h-custom">
				<div class="flex w-full">
					<div
						class="w-1/2 border-b border-r border-solid border-black hover:bg-orange cursor-pointer"
					>
						<div class="p-2">About</div>
					</div>
					<div
						class="w-1/2 border-b border-solid border-black hover:bg-yellow cursor-pointer"
					>
						<div class="p-2">Tutorials</div>
					</div>
				</div>
				<div class="flex w-full">
					<div
						class="w-1/2 border-r border-solid border-black hover:bg-green cursor-pointer"
					>
						<div class="p-2">Blog</div>
					</div>
					<div class="w-1/2 hover:bg-blue cursor-pointer">
						<div class="p-2">Social</div>
					</div>
				</div>
			</main>
		`;
	}
}

customElements.define('app-main', Main);
/**
 * Add h-inherit to expanded row.
 * Add h-collapsed to collapsed row.
 * Add flex-grow to clicked section
 * Remove widths from all sections of row. (w-1/2)
 */
