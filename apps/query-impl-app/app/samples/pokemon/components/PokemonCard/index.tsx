import pokemonApi from '../../query/pokemonApi';
import classes from './index.module.scss';

const PokemonCard = ({ name }: { name: string }) => {
  const { data } = pokemonApi.useFetch({ name });
  const { id, sprites, name: realName, base_experience } = data || {};
  const { front_default } = sprites || {};

  return (
    <div className={classes.root}>
      <h3 className={classes.title}>
        #{id} - {realName}
      </h3>
      <div className={classes.img}>
        <img src={front_default} alt={realName} />
      </div>
      <div className={classes.stats}>
      <pre>base_experience: {base_experience}</pre>
      </div>
    </div>
  );
};

export default PokemonCard;
