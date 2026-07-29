import { html, LitElement } from '../../assets/lit-core-2.7.4.min.js';

export class FeedbackView extends LitElement {
    render() {
        return html`<div></div>`;
    }
}

if (!customElements.get('feedback-view')) {
    customElements.define('feedback-view', FeedbackView);
}
