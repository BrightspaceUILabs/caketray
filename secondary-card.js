import '@brightspace-ui-labs/accordion/accordion-collapse.js';
import { css, html, LitElement } from 'lit-element/lit-element';
import { labelStyles } from '@brightspace-ui/core/components/typography/styles.js';

class SecondaryCard extends LitElement {

	static get properties() {
		return {
			titleText: { type: String, attribute: 'title-text' },
			summaryText: { type: String, attribute: 'summary-text' },
			collapsable: { type: Boolean }
		};
	}

	static get styles() {
		return [labelStyles, css`
			:host([hidden]) {
				display: none;
			}
			:host {
				background: var(--d2l-color-white);
				border-radius: 0.5rem;
				display: flex;
				flex-direction: column;
				margin-bottom: 0.6rem;
				padding: 1.3rem;
				padding-top: 0;
			}
			.d2l-activity-editor-card {
				display: grid;
				grid-template-rows: [start header] auto [content] auto [end];
			}
			::slotted([slot=header]) {
				grid-row: header;
			}
			::slotted([slot=content]) {
				grid-row: content;
			}
		`];
	}

	render() {
		return this.collapsable ? this._renderCollapsable() : this._renderDefault();
	}

	_renderCollapsable() {
		return html`<d2l-labs-accordion-collapse flex header-border>
		<span slot="header">
			<h3>${this.titleText}</h3>
		</span>
		<span slot="summary">${this.summaryText}</span>
		<slot name="card-content"></slot>
		</d2l-labs-accordion-collapse>
		`;
	}
	_renderDefault() {
		return html`
			<span slot="header">
				<h3>${this.titleText}</h3>
				<hr>
			</span>
			<slot name="card-content"></slot>`;
	}
}

customElements.define('d2l-labs-secondary-card', SecondaryCard);
