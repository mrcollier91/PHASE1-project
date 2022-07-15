
function getPokemon() {
  const pokemonlistURL = "https://pokeapi.co/api/v2/pokemon"
fetch(pokemonlistURL)
.then(resp => resp.json())
.then(data => {
    console.log("data.results", data.results)
    const pokemon = (data.results)
    addPokemonList(pokemon)
})
}

function addPokemonList(pokemon) {
    console.log("pokemon", pokemon)
    const ul = document.getElementById("mainlist");
    pokemon.map((name) => {
        const li = document.createElement("li");
        li.innerHTML = pokemon.name
        ul.append(li)
    })
}
getPokemon()
addPokemonList()