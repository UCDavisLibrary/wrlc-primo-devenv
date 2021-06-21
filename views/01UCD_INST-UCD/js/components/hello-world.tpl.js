import { html, css } from 'lit-element';

export function styles() {
  const elementStyles = css`
    :host {
      display: block;
    }
  `;

  return [elementStyles];
}

export function render() { 
return html`
  <h1>hello World</h1>

`;}