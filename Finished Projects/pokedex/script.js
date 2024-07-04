const poke_container = document.getElementById('poke-container')
const pokemon_count = 1015  // will filter that qty of pokemon you want to 1015 is all current pokemon as of July 3rd 2024
const colors = {
    grass: '#78C850',
    fire: '#F08030',
    water: '#6890F0',
    bug: '#A8B820',
    normal: '#A8A878',
    poison: '#A040A0',
    electric: '#F8D030',
    ground: '#E0C068',
    fairy: '#EE99AC',
    fighting: '#C03028',
    psychic: '#F85888',
    rock: '#B8A038',
    ghost: '#705898',
    ice: '#98D8D8',
    dragon: '#7038F9',
    flying: '#5E7290',
    steel: '#3E6978'
}

const main_types = Object.keys(colors)

const fetchPokemon = async () => { 
    for (let i = 1; i <= pokemon_count; i++) { 
        await getPokemon(i)
    }
}

const getPokemon = async(id) => { 
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    createPokemonCard(data)
}

const createPokemonCard = (pokemon) => { 
    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon')

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    const id = pokemon.id.toString().padStart(3, '0')
    const poke_types = pokemon.types.map(type => type.type.name)
    const type = main_types.find(type => poke_types.indexOf(type) > -1)
    const color = colors[type]

    pokemonEl.style.backgroundColor = color

    const pokemonInnerHTML = `
        <div class="img-container">
          <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        </div>
        <div class="info">
          <span class="number">#${id}</span>
          <h3 class="name">${name}</h3>
          <small class="type">Type: <span>${type}</span></small>
        </div>
    `
    pokemonEl.innerHTML = pokemonInnerHTML

    poke_container.appendChild(pokemonEl)
}

fetchPokemon()