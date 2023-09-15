'use client';

import { Box } from '@mui/material';
import pokemonApi from '../../../query/pokemonApi';

const View = ({ name }: { name: string }) => {
  const { data } = pokemonApi.useFetch({ name });
  const { id, sprites, name: realName, base_experience } = data || {};
  const { front_default } = sprites || {};

  return (
    <Box>
      <h3>
        #{id} - {realName}
      </h3>
      <div>
        <img src={front_default} alt={realName} />
      </div>
      <pre>base_experience: {base_experience}</pre>
    </Box>
  );
};

export default View;
