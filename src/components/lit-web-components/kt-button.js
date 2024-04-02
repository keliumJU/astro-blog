import { LitElement, html, css } from 'lit';

export class KtButton extends LitElement {
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
    return html`<button @click="${this.handleClick}"><slot></slot></button>`;
  }

  handleClick() {
    console.log("this works ?")
    // Dispatch a custom event when the button is clicked
        let customEvent = new CustomEvent("clickRippleButton", {
      bubbles: true,
      composed: true,
      detail: { value: "hello response from lit" },
    });
    this.dispatchEvent(customEvent);
  }
}

customElements.define('kt-button', KtButton);
