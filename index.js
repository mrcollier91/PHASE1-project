document.addEventListener("DOMContentLoaded", (e) => {
  let searchPath = document.getElementById("pokemonNameInput");
  const input = document.getElementById("catchPokemon");
  input.addEventListener("click", (e) => {
    e.preventDefault();
    getIndividualPokemon(searchPath);
  });
  let pokeCard = document.getElementById("PokeCardNAme");
  pokeCard.addEventListener("mouseover", function handleMouseOver() {
    pokeCard.style.color = "red";
  });
  pokeCard.addEventListener("mouseout", function handleMouseOut() {
    pokeCard.style.color = "black";
  });
  const pokemonlistURL = "https://pokeapi.co/api/v2/pokemon";
  function getPokemon() {
    fetch(pokemonlistURL)
      .then((resp) => resp.json())
      .then((data) => {
        const pokemons = data.results;
        addPokemonList(pokemons);
      });
  }
  function addPokemonList(pokemons) {
    const ul = document.getElementById("mainlist");
    pokemons.map((pokemon) => {
      const li = document.createElement("li");
      li.innerHTML = pokemon.name;
      ul.append(li);
    });
  }
  function createPokeCard(pokeStats, pokeName) {
    let h2 = document.getElementById("PokeCardNAme");
    h2.innerHTML = pokeName;
    const ul = document.getElementById("PokeCardCollection");
    pokeStats.map((statValues) => {
      const li = document.createElement("li");
      li.innerHTML = `${statValues.stat.name} - ${statValues.base_stat}`;
      h2.append(li);
    });
  }
  function getIndividualPokemon(pokemon) {
    const BaseURL = "https://pokeapi.co/api/v2/pokemon";
    let pokeSearchPath = searchPath.value;
    let finalURL = `${BaseURL}/${pokeSearchPath}/`;
    fetch(finalURL)
      .then((resp) => resp.json())
      .then((data) => {
        pokeStats = data.stats;
        pokeName = data.name;
        createPokeCard(pokeStats, pokeName);
      });
  }
  getPokemon();
});
