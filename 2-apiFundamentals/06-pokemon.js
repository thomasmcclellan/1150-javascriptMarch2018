const tHead = document.getElementById("tHead");
const tBody = document.getElementById("tBody");
const searchPoke = document.getElementById("searchPoke");

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
        fillTable(data);
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
  console.log(pokeObj);
  tHead.innerHTML = '<tr><td><b>'+ 'Pokemon: ' + '</b</td><td><b>' + pokeObj.name + '</b></td></tr>';
  tBody.insertAdjacentHTML("beforeend", '<tr><td>'+ "PokéDex ID #:" + '</td><td>' + pokeObj.id + '</td></tr>');
  switch (pokeObj.types.length) { //check the length of the array to decide how to continue
      case 2: //pokemon has 2 types
          tBody.insertAdjacentHTML("beforeend", '<tr><td>'+ "Type" + '</td><td>' + 
              capFirstName(pokeObj.types[1].type.name) + '/' + //The types come back reversed from the API, so we put the second one first.
              capFirstName(pokeObj.types[0].type.name) + '</td></tr>');
          break; //ends the statement after the correct case has run
      case 1: //pokemon has 1 type
          tBody.insertAdjacentHTML("beforeend", '<tr><td>'+ "Type" + '</td><td>' +
              capFirstName(pokeObj.types[0].type.name) + '</td></tr>');
          break;
      default: //in case something goes crazy
          break;
  }
  tBody.insertAdjacentHTML("beforeend", '<tr><td>'+ "Sprites:" + '</td><td>' + 
      `<img src=${pokeObj.sprites.front_default} />` +
      `<img src=${pokeObj.sprites.back_default} />` + '</td></tr>');
}

function capFirstName(x) {
  for (let j in x) {
    if (j == 0) {
      x = x.replace(x[j], x[j].toUpperCase());
    }
    if (x[j-1] == '-') {
      x = x.replace(x[j], x[j].toUpperCase());
      x = x.replace(x[j-1], ' ');
    }
  }
  return x;
}

// let domString = '<div><p>Im a DOM String!</p></div>';
// let body = document.querySelector('body');
// body.innerHTML = domString;