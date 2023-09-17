import VisibilityIcon from '@mui/icons-material/Visibility';
import { Table, TableBody, TableCell, TableRow } from '@mui/material';
import _ from 'lodash';
import Link from 'next/link';
import { MouseEventHandler, useState } from 'react';
import pokemonListApi from '../../query/pokemonListApi';
import PokemonCard from '../PokemonCard';
import classes from './index.module.scss';

const base = {
  'pointer-events': 'none',
  'user-select': 'none',
  display: 'block',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  'border-radius': '100%',
  'z-index': 10000,
  '@keyframes pulse': {
    '0%': {
      transform: 'scale(0.8) translate(-50%, -50%)',
    },
    '50%': {
      transform: 'scale(1) translate(-50%, -50%)',
    },
    '100%': {
      transform: 'scale(0.8) translate(-50%, -50%)',
    },
  },
  '@media only screen and (max-width: 700px)': {
    '#cursor': {
      display: 'none',
    },
  },
};

const PokemonList = ({ limit, offset }: { limit: number; offset: number }) => {
  const { data } = pokemonListApi.useFetch({ limit, offset });
  const [nameInFocus, setNameInFocus] = useState<string | null>(null);

  const onRowOver: MouseEventHandler = (ev) => {
    setNameInFocus(ev.currentTarget.getAttribute('data-name'));
  };

  const onRowOut: MouseEventHandler = (ev) => {
    setNameInFocus(null);
  };

  return (
    <div className={classes.root}>
      <Table size="small">
        <TableBody>
          {data?.results?.map((pokemon) => (
            <TableRow
              onMouseOver={onRowOver}
              onMouseOut={onRowOut}
              data-name={pokemon.name}
              key={pokemon.name}
            >
              <TableCell>
                {_.capitalize(pokemon.name)}
                {pokemon.name === nameInFocus && (
                  <div className={classes['preview-modal-container']}>
                    <PokemonCard name={pokemon.name} />
                  </div>
                )}
              </TableCell>
              <TableCell>
                <Link href={`/samples/pokemon/${pokemon.name}`}>
                  <VisibilityIcon fontSize={'large'} />
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PokemonList;
