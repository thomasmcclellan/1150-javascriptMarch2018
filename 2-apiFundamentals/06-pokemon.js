const tHead = document.getElementsByTagName('tHead');
const tBody = document.getElementsByTagName('tBody');
const searchPoke = document.getElementById('searchPoke');

const baseURL = 'https://pokeapi.co/api/v2/pokemon/';
let url;

function searchPoke() {
  let pokeName = searchPoke.value;
  if (pokeName.trim() == '') {
    alert('Enter a pokemon');
  } else {
    url = baseURL + pokeName.toLowerCase();
    fetch(url)
      .then(response => {
        response.json()
      })
      .then(data => {
        console.log(data);
      })
  }
}

function fillTable(pokeObj) {
  while (tHead.firstChild) {
    tHead.removeChild(tHead.firstChild);
  }

  while (tBody.firstChild) {
    tBody.removeChild(tBody.firstChild);
  }

  tHead.innerHTML = `<tr><td><b>${Pokemon}</b></td><td><b>${pokeObj.name}</b></td></tr>`;
  tBody.insertAdjacentHTML('beforeend', '<tr><td>' + 'PokeDex ID #' + '</td><td>' + pokeObj.id + '</td></tr>');
}

let domString = '<div><p>Im a DOM String!</p></div>';
let body = document.querySelector('body');
body.innerHTML = domString;