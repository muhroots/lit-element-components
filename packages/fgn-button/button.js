
import { LitElement, html } from 'lit-element'
import { classMap } from 'lit-html/directives/class-map'
import { style } from './styles'

class Button extends LitElement {
  static get properties() {
    return {
      primary: { type: Boolean },
      pressed: { type: Boolean }
    }
  }

  static get styles() {
    return [style];
  }

  constructor () {
    super()    
  }

  render() {
    const theme = {
      'c-button--primary': this.primary,
      'c-button--pressed': this.pressed,
    }

    return html`
      <button class="c-button ${classMap(theme)}">
        <slot name="text"></slot>
      </button>
    `;
  }
}

customElements.define('fgn-button', Button)