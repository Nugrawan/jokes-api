class TitleBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
        * {
            margin:0;
            padding:0;
        }

        .title {
            background-color: #334756;
            padding: 10px;
            text-align: center;
            margin-bottom: 20px;
        }
        
        .title h1{ 
            font-size: 3em;
            color: #273346;
            text-shadow: 3px 2px 1px #ff4c29;
        }
        
        .title p{
            font-size: large;
            color: #ff4c29;
            text-shadow: 2px 2px 1px #352929;
            margin: 10px;
        }
        </style>

        <div class="title">
            <h1>JokeS</h1>
            <p>Some random jokes in English</p>
        </div>
        `;
  }
}

customElements.define('title-bar', TitleBar);
