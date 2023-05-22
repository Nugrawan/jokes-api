import '../component/search-bar';

function main() {
  const url = 'https://v2.jokeapi.dev';
  const object = [];

  const renderJokes = (joke) => {
    const jokesList = document.querySelector('#jokesList');
    jokesList.innerHTML = `<h3>Jokes Get : ${joke.length}</h3>`;
    joke.forEach((jokes, index) => {
      jokesList.innerHTML += `<h5>${index + 1} . </h5>`;
      if (jokes.type === 'single') {
        jokesList.innerHTML += `
        <article>
        <div class="card">
            <p>"${jokes.joke}"</p><br>
            <ul>
                <li>ID : ${jokes.id}</li>
                <li>Type : ${jokes.type}</li>
                <li>Category : ${jokes.category}</li>
                
            </ul>
        </div>
        </article>
        `;
      } else {
        jokesList.innerHTML += `
        <article>
            <div class="card">
                <p>> "${jokes.setup}"</p><br>
                <p>> "${jokes.delivery}"</p>
                <ul>
                    <li>ID : ${jokes.id}</li>
                    <li>Type : ${jokes.type}</li>
                    <li>Category : ${jokes.category}</li>
                </ul>
            </div>
        </article>
        `;
      }
    });
  };

  function responseMessage() {
    alert('Not Available');
  }

  const getJokes = (joke) => {
    const obj = {
      keyword: joke.keyword,
      type: joke.type,
      amount: joke.amount,
    };

    fetch(`${url}/joke/Any?type=${obj.type}&contains=${obj.keyword}&amount=${obj.amount}`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.error) {
          responseMessage(responseJson.error);
        } else {
          renderJokes(responseJson.jokes);
        }
      })
      .catch((error) => {
        responseMessage(error);
      });
  };

  document.addEventListener('DOMContentLoaded', () => {
    const { shadowRoot } = document.querySelector('search-bar');
    const keyword = shadowRoot.querySelector('#inputKeyword');
    const radios = shadowRoot.querySelectorAll('input[type="radio"]');
    const amount = shadowRoot.querySelector('#amountJoke');
    const button = shadowRoot.querySelector('#searchButton');

    button.addEventListener('click', () => {
      let selected;
      radios.forEach((radio) => {
        radio.addEventListener('change', (event) => {
          selected = event.target.value;
        });
      });

      const joke = {
        keyword: keyword.value,
        type: selected,
        amount: Number.parseInt(amount.value, 10),
      };

      getJokes(joke);
    });
    renderJokes(object);
  });
}

export default main;
