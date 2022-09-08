const pokemonNumber = document.querySelector('.pokemon-number');
const pokemonName = document.querySelector('.pokemon-name');
const imgBackPokemon = document.querySelector('.img-back-pokemon');
const imgPokemon = document.querySelector('.img-pokemon');
const types = document.querySelector('.types');

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
    const type = data.types;

    //Name and Number
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    //Image Pokémon
    imgBackPokemon.src = data['sprites']['versions']['generation-v']['black-white']['animated']['back_default'];
    imgPokemon.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    //Types
    switch(type.length){
        case 1:
            console.log('1');
            types.innerHTML = `<span class="type-1">${type['0']['type']['name']}</span>`
            break;
        case 2:
            console.log('2');
            types.innerHTML = `<span class="type-1">${type['0']['type']['name']}</span>
                                <span class="type-1">${type['1']['type']['name']}</span>`
            break;
    }
    
    input.value = '';
}

//
form.addEventListener('submit', (e) => {
    e.preventDefault();
    renderPokemon(input.value.toLowerCase());
});
