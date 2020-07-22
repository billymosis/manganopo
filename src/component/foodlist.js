class foodlist extends HTMLElement {
  constructor() {
    super();
  }

  set data(data) {
    this._data = data;
    this.render();
  }

  renderError(message) {
    this.innerHTML = "";
    this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }

  render() {
    this.innerHTML = "";
    this._data.forEach((e) => {
      const foodelement = document.createElement("food-card");
      foodelement.data = e;
      this.appendChild(foodelement);
    });
  }
}

customElements.define("food-list", foodlist);
