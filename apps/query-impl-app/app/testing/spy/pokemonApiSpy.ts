import createFetchSpy from '@query-impl/core/testing/spy/createFetchSpy';
import pokemonApi from '../../samples/pokemon/query/pokemonApi';

const pokemonApiSpy = createFetchSpy(pokemonApi);

export default pokemonApiSpy;
