'use client';

import pokemonApi from '../../query/pokemonApi';

const View = () => {
  const { data: ditto, status } = pokemonApi.useFetch({ name: 'ditto' });
  console.log({ status, ditto });
  return <h1>Pokemon view</h1>;
};

export default View;
