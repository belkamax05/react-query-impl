"use client";
import { Table } from '@mui/material';
import pokemonApi from '../../query/pokemonApi';
import classes from './index.module.scss';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const PokemonDetails = ({ name }: { name: string }) => {
  const { data, isLoading } = pokemonApi.useFetch({ name });

  if(isLoading) return <Skeleton height={500} />
  return (
    <div className={classes.root}>
      <h3>
        #{data.id} - {data.name}
      </h3>
      <div>
        <img src={data.sprites.front_default} alt={data.name} />
      </div>
      <Table className={classes['stats-table']}>
        <thead>
          <tr>
            <th>Stat</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>height</td>
            <td>{data.height}</td>
          </tr>
          <tr>
            <td>base_experience</td>
            <td>{data.base_experience}</td>
          </tr>
          <tr><td colSpan={2}>&nbsp;</td></tr>
          {data?.stats?.map((stat) => (
            <tr key={stat.stat.name}>
              <td>{stat.stat.name}</td>
              <td>{stat.base_stat}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PokemonDetails;
