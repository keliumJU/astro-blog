import { LitElement, html, css } from 'lit';

export class CalcAdd extends LitElement {
	static get properties() {
		return {
			num: {
				type: Number,
			},
		};
	}

   static styles = css`
    div{
      background-color: green;
    }
  `;

	render() {
		return html` <div>Number: ${this.num}</div> `;
	}
}

customElements.define('calc-add', CalcAdd);
