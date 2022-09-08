const pokemonNumber = document.querySelector('.pokemon-number');
const pokemonName = document.querySelector('.pokemon-name');
const imgBackPokemon = document.querySelector('.img-back-pokemon');
const imgPokemon = document.querySelector('.img-pokemon');

const form = document.querySelector('.form');
const input = document.querySelector('.input-form');

//Search pokemon
const fetchPokemon = async (pokemon) => {
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    const data = await APIresponse.json();

    return data;
}

//Pokemon info render
const renderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon);

    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    imgBackPokemon.src = data['sprites']['versions']['generation-v']['black-white']['animated']['back_default'];
    imgPokemon.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    
}

//
form.addEventListener('submit', (e) => {
    e.preventDefault();
    renderPokemon(input.value.toLowerCase());
});
