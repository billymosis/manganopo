class myHeader extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    let y = this.querySelector('#searchfood').value
    return y;
  }

  set random(event){
    this._random = event;
    this.render()
  }

  render() {
    this.innerHTML = `

          <nav>
          <div>
          <a href="#">
          <img src="https://image.flaticon.com/icons/svg/3187/3187880.svg" width="30" height="30"alt="" loading="lazy">
          Mangan opo?
          </a>
          </div>
          <div>
            <ul >
              <li >
                <a id="randomfood"href="#">Random<span>(current)</span></a>
              </li>
              <li>
              <a id="about"href="#">About</a>
              </li>
            </ul>
            <form id="foodform">
              <input id="searchfood"type="search" placeholder="eg: chicken..." aria-label="Search">
              <button id="searchbutton"type="submit">Search</button>
            </form>
          </div>
        </nav>
  
  `;
    this.querySelector("#about").onclick = () => {
      alert("Made by Billy\nedo.billy@gmail.com");
    };

    this.querySelector("#searchbutton").addEventListener(
      "click",
      this._clickEvent
    );

    this.querySelector("#randomfood").addEventListener(
      "click",
      this._random
    );
  }
}


customElements.define("my-header", myHeader);
