const endPoint = 'http://pokeapi.co/';

const pokemonsEP = `${endPoint}/api/v1/pokemon/?limit=20&offset=0`;
export const mediaEP = `${endPoint}/media/img/`;

export const requestPokemons = async function () {
    const pokemonsRequest = await fetch(pokemonsEP);
    const pokemonsResponse = await pokemonsRequest.json();

    return pokemonsResponse.objects;
};