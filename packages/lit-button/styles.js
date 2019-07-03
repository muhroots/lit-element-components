import { css } from 'lit-element';

export const style = css`
  :host {
    --o-color-button: #1E88E5;
    --o-color-outline: rgba(0, 125, 255, 0.25);
  }

  .c-button {
    height: 3.5rem;
    position: relative;
    padding: 0 1rem;
    border: none;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: .85rem;
    font-weight: 900;
    border-radius: 0.25rem;
    background-color: var(--o-color-button);
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    color: #FFF;
  }

  .c-button:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem var(--o-color-outline);
  }


  .c-button--pressed {
    will-change: transform;
    transition: all 100ms linear;
    background-image: linear-gradient(to right, #9ccc65, #43a047);
    box-shadow: 0 0.25rem 0.5rem 0 rgba(27, 94, 32, 0.16), inset 0 -0.25rem 0 0 rgba(0, 0, 0, 0.16);
  }

  .c-button--pressed:active {
    transform: translateY(4px);
    box-shadow: 0 0 0;
  }
`