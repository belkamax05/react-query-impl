import Axios from 'axios';

const dittoGet = async () => {
  const { data } = await Axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
  return data;
};

export default dittoGet;
