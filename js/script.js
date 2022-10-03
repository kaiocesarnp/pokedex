const pokemonName = document.querySelector('.pokemon__name'); //recebe o nomme do pokemon
const pokemonNumber = document.querySelector('.pokemon__number'); //recebe o numero do pokemon
const pokemonImage = document.querySelector('.pokemon__image'); //recebe a imagem do pokemon

const form = document.querySelector('.form');
const input = document.querySelector('.input__search'); 

const fetchPokemon = async (pokemon) => {  //'async' = função assincrona
    const APIResponse = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemon}`); //'await' espera o carregamento da api concluir, ao invés de passar para as próximas. 'await' só pode ser usado em funções assíncronas
    const data = await APIResponse.json(); //extrair repostas da api em JSON. Função assincrona
    return data;
}


const renderPokemon = async (pokemon) => { //função q renderiza os dados na tela
    const data =  await fetchPokemon(pokemon);

    pokemonName.innerHTML = data.name; //referencias da API: nome, número e imagem
    pokemonNumber.innerHTML = data.id; 
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    renderPokemon(input.value);
});