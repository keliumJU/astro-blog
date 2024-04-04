import { LitElement, html, css } from 'lit';

export class KtButton extends LitElement {
  static properties = {
    action: { type: String } // Define a property to indicate the action
  };

 static styles = css`
    button {
      background-color: purple;
      cursor: pointer;
      color: white;
    }
    button:hover {
      background-color: #BF40BF;
    }
  `;

  render() {
    return html`<button id="${this.idn}" @click="${this.handleClick}"><slot></slot></button>`;
  }

  handleClick() {
    const customEvent = new CustomEvent("clickRippleButton", {
      bubbles: true,
      composed: true,
      detail: this.action
    });

    this.dispatchEvent(customEvent);
  }
}

customElements.define('kt-button', KtButton);
