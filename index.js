document.addEventListener('DOMContentLoaded', (e) =>{
//eventlisteners  
//click event prevents default (page resetting because its technically a submit event)
//invokes getIndividualPokemon and passes searchPath witch is the value of in input field value the text the user enders 
let searchPath = document.getElementById("pokemonNameInput")
    const input = document.getElementById('catchPokemon')
    input.addEventListener('click', (e)=> {
        e.preventDefault()
        getIndividualPokemon(searchPath)
    })
let pokeCard = document.getElementById("PokeCardNAme")
pokeCard.addEventListener('mouseover', function handleMouseOver() {
    pokeCard.style.color = 'red'
})
pokeCard.addEventListener('mouseout', function handleMouseOut() {
    pokeCard.style.color = 'black'
})
//get data from api server pass parameter to addPokemonList
//used pokemonlist URL to get repsonse convert to JSON take the data.results which was the first key that had a list of pokemon names 
//invokes addPokemonList which makes a master list for users to choose from on the page 
const pokemonlistURL = "https://pokeapi.co/api/v2/pokemon"
function getPokemon() {
fetch(pokemonlistURL)
.then(resp => resp.json())
.then(data => {
    const pokemons = data.results
    addPokemonList(pokemons)
})
}
function addPokemonList(pokemons) {
    const ul = document.getElementById("mainlist");
    pokemons.map((pokemon) => {
        const li = document.createElement("li");
        li.innerHTML = pokemon.name
        ul.append(li)
    })
}
//get individual pokemon data to make "card"
//TODO: need to come back and switch pokeSearchPath to result from event listener from input text 
//input search path just filled in with pokemon name to continue till getIndicidualPokemon function fetch will work 
function createPokeCard(pokeStats, pokeName) {
    let h2 = document.getElementById('PokeCardNAme')
    h2.innerHTML = pokeName
    const ul = document.getElementById('PokeCardCollection')
    pokeStats.map((statValues) => {
        const li = document.createElement("li");
        li.innerHTML = `${statValues.stat.name} - ${statValues.base_stat}`
        h2.append(li)
    })
}
function getIndividualPokemon(pokemon) {
    const BaseURL = "https://pokeapi.co/api/v2/pokemon"
    let pokeSearchPath = searchPath.value
    let finalURL = `${BaseURL}/${pokeSearchPath}/`
   fetch(finalURL)
   .then(resp => resp.json())
   .then(data => {
       
       pokeStats = data.stats
       pokeName = data.name
       createPokeCard(pokeStats, pokeName)
})
}
//invoke get pokemon so master list loads when DOM is loaded for user to pick pokemon from 
getPokemon()
})
