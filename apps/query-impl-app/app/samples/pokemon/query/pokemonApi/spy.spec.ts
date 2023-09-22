import createFetchSpy from '@query-impl/core/testing/spy/createFetchSpy';
import pokemonApi from '.';

const pokemonApiSpy = createFetchSpy(pokemonApi);

export default pokemonApiSpy;
