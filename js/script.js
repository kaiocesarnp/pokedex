const pokemonName = document.querySelector('.pokemon__name'); //recebe o nomme do pokemon
const pokemonNumber = document.querySelector('.pokemon__number'); //recebe o numero do pokemon
const pokemonImage = document.querySelector('.pokemon__image'); //recebe a imagem do pokemon

const form = document.querySelector('.form');
const input = document.querySelector('.input__search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next'); 

let searchPokemon = 1; //variavél global que armazena a id na ordem dos pokemons

const fetchPokemon = async (pokemon) => {  //'async' = função assincrona
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`); //'await' espera o carregamento da api concluir, ao invés de passar para as próximas. 'await' só pode ser usado em funções assíncronas
    
    if(APIResponse.status === 200){//API igual a 200 = encontra o pokemon, senão, não retorna nada
        const data = await APIResponse.json(); //extrair repostas da api em JSON. Função assincrona
        return data;
    }
}


const renderPokemon = async (pokemon) => { //função q renderiza os dados na tela
    pokemonName.innerHTML = 'Loading...'; //mensagem exibida enquanto os dados do pokemon são carregados
    pokemonNumber.innerHTML = '';

const data =  await fetchPokemon(pokemon);

if(data){ //se tiver dados do pokemon, renderiza na tela
    pokemonImage.style.display = 'block';
    pokemonName.innerHTML = data.name; //referencias da API: nome, número e imagem
    pokemonNumber.innerHTML = data.id; 
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    input.value = ''; //remover nome ou numero após pesquisar pokemon
    searchPokemon = data.id; //botões next e prev continuam a exibir pokemons a partir do pesquisado

}else{ //se não tiver dados do pokemon, a mensagem 'not found :c' é exibida
    pokemonImage.style.display = 'none';
    pokemonName.innerHTML = 'Not found :c';
    pokemonNumber.innerHTML = '';
 }
}


form.addEventListener('submit', (event) => { //formulário de pesquisa do pokemon
    event.preventDefault();
    renderPokemon(input.value.toLowerCase()); //toLowerCase() = possibilita pesquisar com letras maiusculas ou minusculas
});

//botões prev e next
buttonPrev.addEventListener('click', () => {
    if(searchPokemon > 1){ //limita o botão de voltar a não voltar além do primeiro pokemon
    searchPokemon -= 1;
    renderPokemon(searchPokemon);
    }
});

buttonNext.addEventListener('click', () => {
    searchPokemon += 1;
    renderPokemon(searchPokemon);
});

renderPokemon(searchPokemon); //pokedex sempre inicia com o primeiro pokemon