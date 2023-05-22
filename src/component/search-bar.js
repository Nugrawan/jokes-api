class SearchBar extends HTMLElement {
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
        box-sizing: border-box;
    }

    .search-container {
        align-items: center;
        color: #b4b3b3;
        background-color: #2c394b;
        padding: 10px;
    }
    
    .amount, .keyword{
        padding: 10px;
        display: flex;
    }
    
    .amount label {
        color: #ff4c29;
        padding-top: 15px;
        margin-right: 10px;
    }
    
    #searchButton {
        padding: 10px;
        margin: 5px;
        font-family: helvetica;
        font-weight: 600;
        border: none;
        background-color: #ff4c29;
    }
    #searchButton:hover {
        background-color: #b13016;
    }
    @media screen and (max-width: 500px) {
        .search-container {
            font-size: small;
        }
    }
    
    @media screen and (max-width: 374px) {    
        .keyword {
            display: flex;
            flex-direction: column;
        }
        .amount label {
            margin-right: 5px;
            font-size: smaller
        }
    }
    </style>
    
    <div id="searchContainer" class="search-container">
        <div class="keyword">
            <label for="inputKeyword"> Keyword: </label>
            <input type="search" placeholder="Jokes Keyword" id="inputKeyword" required>
        </div>
        <div class="amount">
            <p>Type:</p>  
            <input type="radio" name="radio" id="singleType" value="single" required>
            <label for="singleType">Single</label>
            <input type="radio" name="radio" id="twopartType" value="twopart" required>
            <label for="twopartType">Twopart</label>
        </div>
        <div class="keyword">
            <label for="amountJoke">Amount:  </label>
            <input type="number" placeholder="Jumlah Jokes" id="amountJoke" required>
        </div>
        <button id="searchButton" type="submit">Search</button>   
    </div>
    `;
  }
}

customElements.define('search-bar', SearchBar);
