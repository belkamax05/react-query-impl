import pokemonApi from '../query/pokemonApi';

const PokemonCard = ({ name }: { name: string }) => {
  const { data } = pokemonApi.useFetch({ name });
  const { id, sprites, name: realName, base_experience } = data || {};
  const { front_default } = sprites || {};

  return (
    <div>
      <h3>
        (CARD) #{id} - {realName}
      </h3>
      <div>
        <img src={front_default} alt={realName} />
      </div>
      <pre>base_experience: {base_experience}</pre>
    </div>
  );
};

export default PokemonCard;
