// featch = Function used for making HTTP requests to fetch resources
// (JSON style data, images, files)
// Simplifies aysnchronous data fetching in JavaScript and used for
// interacting with APIs to retrieve and send data asynchronously
// over the web
// fetch(url, {method: "GET", "POST", "PUT", "DELETE", ect})

/*fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
.then(response => {
  if(!response.ok) {
    throw new Error('Could not fetch resource');
  }
  return response.json();
})
.then(data => console.log(data))
.catch(error => console.error(error));*/
// Async and await with fetch

async function fetchData() {
  try{
    const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    if(!response.ok) {
      throw new Error('Could Not Fetch Resource');
    }
    
    const data = await response.json();
    const pokeSprite = data.sprites.front_default;
    const imgEl = document.getElementById('pokemonSprite');
    
    imgEl.src = pokeSprite;
    imgEl.style.display = 'block';
  }
  catch(error) {
    console.error(error);
  }
}