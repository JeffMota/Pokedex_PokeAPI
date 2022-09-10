const pokemonNumber = document.querySelector('.pokemon-number');
const pokemonName = document.querySelector('.pokemon-name');
const imgBackPokemon = document.querySelector('.img-back-pokemon');
const imgPokemon = document.querySelector('.img-pokemon');
const types = document.querySelector('.types');
const height = document.querySelector('.height')
const weight = document.querySelector('.weight')
const habitat = document.querySelector('.habitat');

const form = document.querySelector('.form');
const input = document.querySelector('.input-form');

//Search pokemon
const fetchPokemon = async (pokemon) => {
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    const data = await APIresponse.json();

    return data;
}

//Search Specie
const fetchSpecie = async (pokemon) => {
    const ResponseSpecie = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`)

    const data = await ResponseSpecie.json();

    return data;
}

//Pokemon info render
const renderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon);
    const dataSpecie = await fetchSpecie(pokemon);
    const type = data.types;

    input.value = '';

    //Name and Number
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;

    //Image Pokémon
    imgBackPokemon.src = data['sprites']['versions']['generation-v']['black-white']['animated']['back_default'];
    imgPokemon.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];

    //Types
    switch(type.length){
        case 1:
            types.innerHTML = `<span class="type-1">Type: ${type['0']['type']['name']}</span>`
            break;
        case 2:
            types.innerHTML = 
            `<span class="type-1">Types: ${type['0']['type']['name']}, </span>
            <span class="type-1">${type['1']['type']['name']}</span>`;
            break;
    }

    //Attibs
    height.innerHTML = `Height: ${(data.height)/10}m`;
    weight.innerHTML = `Weight: ${(data.weight)/10}Kg`;

    //Specie info
    habitat.innerHTML = `Habitat: ${dataSpecie.habitat.name}`
}

//
form.addEventListener('submit', (e) => {
    e.preventDefault();
    renderPokemon(input.value.toLowerCase());
});
