import { LitElement } from 'lit-element';
import {render, styles} from "./hello-world.tpl.js";

export default class HelloWorld extends LitElement {

  static get properties() {
    return {
      
    }
  }

  static get styles() {
    return styles();
  }

  constructor() {
    super();
    this.render = render.bind(this);
  }

}

customElements.define('hello-world', HelloWorld);