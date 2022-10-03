const fetchPokemon = async (pokemon) => {  //'async' = função assincrona
    const APIResponse = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemon}`); //'await' espera o carregamento da api concluir, ao invés de passar para as próximas. 'await' só pode ser usado em funções assíncronas   
                                                                                                                     
    console.log(APIResponse);
}

fetchPokemon();

