
import { LitElement, html } from 'lit-element'
import { classMap } from 'lit-html/directives/class-map'
import { style } from './styles'

class Button extends LitElement {
  static get properties() {
    return {
      raised: { type: Boolean },
      pressed: { type: Boolean }
    }
  }

  static get styles() {
    return [style];
  }

  constructor () {
    super()

    this.raised = false
    this.pressed = false    
  }

  render() {
    const theme = {
      'c-button--raised': this.raised,
      'c-button--pressed': this.pressed,
    }

    return html`
      <button class="c-button ${classMap(theme)}">
        <slot name="icon"></slot>
        <slot name="label"></slot>
      </button>
    `;
  }
}

customElements.define('lit-button', Button)