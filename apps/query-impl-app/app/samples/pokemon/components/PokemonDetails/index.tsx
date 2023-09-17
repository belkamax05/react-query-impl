'use client';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import pokemonApi from '../../query/pokemonApi';
import classes from './index.module.scss';

const PokemonDetails = ({ name }: { name: string }) => {
  const { data, isLoading } = pokemonApi.useFetch({ name });

  if (isLoading) return <Skeleton height={500} />;
  return (
    <div className={classes.root}>
      <h3>
        #{data.id} - {data.name}
      </h3>
      <div>
        <img src={data.sprites.front_default} alt={data.name} />
      </div>
      <Table size="small" className={classes['stats-table']}>
        <TableHead>
          <tr>
            <th>Stat</th>
            <th>Value</th>
          </tr>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>height</TableCell>
            <TableCell>{data.height}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>base_experience</TableCell>
            <TableCell>{data.base_experience}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>&nbsp;</TableCell>
          </TableRow>
          {data?.stats?.map((stat) => (
            <TableRow key={stat.stat.name}>
              <TableCell>{stat.stat.name}</TableCell>
              <TableCell>{stat.base_stat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PokemonDetails;
