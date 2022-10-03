const fetchPokemon = async (pokemon) => {  //'async' = função assincrona
    const APIResponse = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemon}`); //'await' espera o carregamento da api concluir, ao invés de passar para as próximas. 'await' só pode ser usado em funções assíncronas
    const data = await APIResponse.json(); //extrair repostas da api em JSON. Função assincrona
    return data;
}

//função q renderiza os dados na tela
const renderPokemon = async (pokemon) => {
    const data =  await fetchPokemon(pokemon);
}

