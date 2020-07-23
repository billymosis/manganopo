import css from "!to-string-loader!css-loader!../style/index.css"

class foodcard extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "closed" });
    this._expand = false;
    this._height = "200px";
    this._label = "Read more ...";
  }

  set data(data) {
    this._data = data;
    this.render();
  }

  isVowel(c) {
    if (["a", "e", "i", "o", "u"].indexOf(c.charAt(0).toLowerCase()) !== -1) {
      return "an";
    } else {
      return "a";
    }
  }
  tags() {
    return this._data.strTags.split(",");
  }
  expand() {
    this._expand = this._expand ? false : true;
    if (this._expand) {
      this._height = "auto";
      this._label = "Show less";
    } else {
      this._height = "200px";
      this._label = "Read more ...";
    }
  }

  filterIngredient(y) {
    let x = "";
    Object.keys(y).forEach((key) => {
      if (
        key.match(/strIngredient/) &&
        y[key] != "" &&
        y[key] != null &&
        y[key] != undefined
      ) {
        x += `"${key}":"${y[key]}", `;
      }
    });
    return (this._recipe = JSON.parse("{" + x.slice(0, -2) + "}"));
  }

  filterMeasure(y) {
    let x = "";
    Object.keys(y).forEach((key) => {
      if (
        key.match(/strMeasure/) &&
        y[key] != "" &&
        y[key] != null &&
        y[key] != undefined
      ) {
        x += `"${key}":"${y[key]}", `;
      }
    });
    return (this._measure = JSON.parse("{" + x.slice(0, -2) + "}"));
  }

  test() {
    let str = "";
    Object.values(this._recipe).forEach(
      (x, i) =>
        (str += `<li class="list-group-item">${
          Object.values(this._measure)[i]
        } of ${x}</li>`)
    );
    return str;
  }

  render() {
    this.filterIngredient(this._data);
    this.filterMeasure(this._data);
    this._shadowRoot.innerHTML = `
    <style>${css}</style>
    <div class="box">
      <img src="${this._data.strMealThumb}" alt="food" />
      <div >
        <h5>${this._data.strMeal}</h5>
        <h6>
          ${this.isVowel(this._data.strCategory)} ${this._data.strCategory} from
          <em> ${this._data.strArea}</em>
        </h6>
        <h6>Ingredients:</h6>
        <ol id="recipe"></ol>
        <p class="card-text">
          ${this._data.strInstructions}
        </p>
        <div>
        <a id="readMore" style="cursor: pointer;">${this._label}</a>
        <a href="${
          this._data.strYoutube
        }" target="_blank" style="cursor: pointer;">Youtube</a>
        </div>
      </div>
    </div>

    `;
    this._shadowRoot.querySelector("#readMore").onclick = () => {
      this.expand();
      this.render();
    };

    this._shadowRoot.getElementById("recipe").innerHTML = `${this.test()}`;
  }
}

customElements.define("food-card", foodcard);
