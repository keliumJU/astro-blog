import { LitElement, html, css } from 'lit';

export class KtSSpan extends LitElement {
 static styles = css`
    span{
      background-color: green;
      cursor: pointer;
      color: white;
    }
  `;

  render() {
    return html`<span><slot></slot></span>`;
  }
}

customElements.define('kt-sspan', KtSSpan);
