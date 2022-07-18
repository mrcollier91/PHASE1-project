//global variables
const pokemonlistURL = "https://pokeapi.co/api/v2/pokemon"
//eventlisteners 
//TODO: come back and use once I figure out what is going on with fetch 
let searchPath = document.getElementById("pokemonNameInput")
    const input = document.getElementById('catchPokemon')
    input.addEventListener('click', (e)=> {
        e.preventDefault()
        console.log(searchPath.value)
        
    })
    

//get data from api server pass parameter to addPokemonList
function getPokemon() {
fetch(pokemonlistURL)
.then(resp => resp.json())
.then(data => {
    const pokemon = (data.results)
    addPokemonList(pokemon)
    getIndividualPokemon(pokemon)
})
}
//take data returned from fetch and append li items to ul to make master list 
function addPokemonList(pokemon) {
    const ul = document.getElementById("mainlist");
    pokemon.map((pokemons) => {
        const li = document.createElement("li");
        li.innerHTML = pokemons.name
        ul.append(li)
    })
}

//get individual pokemon data to make "card"
//TODO: need to come back and switch pokeSearchPath to result from event listener from input text 
//input search path just filled in with pokemon name to continue till getIndicidualPokemon function fetch will work 
function getIndividualPokemon(pokemon) {
    const BaseURL = "https://pokeapi.co/api/v2/pokemon"
    let pokeSearchPath = searchPath.value
    let finalURL = `${BaseURL}/${pokeSearchPath}/`
    console.log(pokeSearchPath)
    console.log(finalURL)
//need to remove } when fetch is unblocked
}
//    fetch(finalURL)
//    .then(resp => resp.json())
//    .then(data => {
//        pokeStats = data.stats
//        pokeName = data.name
    //    console.log("pokestats",pokeStats)
    //    console.log("pokename", pokeName)
//        createPokeCard(pokeStats, pokeName)
// })
// }
function createPokeCard(pokeStats, pokeName) {
    let h2 = document.getElementById('PokeCardNAme')
    h2.innerHTML = pokeName
    const ul = document.getElementById('PokeCardCollection')
    pokeStats.map((statValues) => {
        // console.log(statValues)
        const li = document.createElement("li");
        li.innerHTML = `${statValues.stat.name} - ${statValues.base_stat}`
        h2.append(li)
    
    })
}
//invoke functions 
getPokemon()

