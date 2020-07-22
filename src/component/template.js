class myHeader extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "closed" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._shadowRoot.innerHTML = `
        <h1>this is header</h1>`;
  }
}

customElements.define("my-header", myHeader);
