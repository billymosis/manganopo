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

          <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
          <img src="https://image.flaticon.com/icons/svg/3187/3187880.svg" width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy">
          Mangan opo?
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
        
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a id="randomfood" class="nav-link" href="#">Random<span class="sr-only">(current)</span></a>
              </li>

              <li class="nav-item">
              <a id="about" class="nav-link" href="#">About</a>
              </li>
            </ul>
            <form id="foodform" class="form-inline my-2 my-lg-0">
              <input id="searchfood" class="form-control mr-sm-2" type="search" placeholder="eg: chicken..." aria-label="Search">
              <button id="searchbutton" class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
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
