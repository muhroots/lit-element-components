import { css } from 'lit-element';

export const style = css`
  .c-button {
    min-width: 120px;
    background-color: transparent;
    border: none;
    border-radius: var(--button-radius, 4px);
    color: var(--button-color, #1e88e5);
    cursor: pointer;
    font-family: var(--font-family, system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif);
    font-size: 0.85rem;
    font-weight: 700;
    height: var(--button-height, 64px);
    outline: none;
    padding: 0 1rem;
    position: relative;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
  }

  .c-button:hover,
  .c-button:focus {
    background-color: rgba(0, 0, 0, 0.08);
  }

  .c-button:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem var(--color-focus-a11y, rgba(0, 125, 255, 0.25));
  }

  /**  modify componenet
    **/

  .c-button--primary {
    background-color: var(--button-background, #1e88e5);
    color: white;
  }

  .c-button--primary:hover,
  .c-button--primary:focus {
    background-color: var(--button-background-hover, #1773c4);
  }

  .c-button--pressed {
    box-shadow: 0 0.25rem 0.5rem 0 rgba(27, 94, 32, 0.16), 
                0 -0.25rem 0 0 rgba(0, 0, 0, 0.16) inset;
    transition: transform 100ms linear;
    will-change: transform;
  }

  .c-button--pressed:active {
    box-shadow: 0 0 0;
    transform: translateY(0.25rem);
  }

  .c-button--pressed > span {
    position: relative;
    top: -1px;
  }
`