let url='https://rickandmortyapi.com/api/character'

fetch(url)
    .then(response => response.json())
    .then(json => {
        printCharacters(json.results);
    });

// Pinta todos los pokemos insertando un HTML dentro del #container
function printCharacters(character) {
    const container = document.getElementById('container')
    character.forEach(character => {
      container.innerHTML = `
      ${container.innerHTML}
      <div class="card">
      <img src="https://rickandmortyapi.com/api/character/avatar/${getcharacterId(character.url)}.jpeg">
      <span>No.${getcharacterId(character.url)}</span>
      <h2>${character.name.charAt(0).toUpperCase() + character.name.slice(1)}</h2>
      <p>Status: ${character.status.charAt(0).toUpperCase() + character.status.slice(1)}</p>
      <p>Species: ${character.species.charAt(0).toUpperCase() + character.species.slice(1)}</p>
      <p>Type: ${character.type.charAt(0).toUpperCase() + character.type.slice(1)}</p>
      <p>Gender: ${character.gender.charAt(0).toUpperCase() + character.type.slice(1)}</p>
      </card>
      `;
    });
  }
  
  // En esta ruta de la API no nos viene el id de cada pokemon, pero si que nos viene
  // una URL, para poder obtener todos los datos de ese pokemon, la cual contiene su ID
  // así que le extraigo el ID a la URL
  function getcharacterId(urli) {
    return urli.replace('https://rickandmortyapi.com/api/character', '').replace('/','')
  }