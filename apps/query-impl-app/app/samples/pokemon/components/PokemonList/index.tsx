'use client';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {
  Box,
  FormControl,
  FormLabel,
  MenuItem,
  Pagination,
  Select,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@mui/material';
import _ from 'lodash';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChangeEvent, MouseEventHandler, useCallback, useState } from 'react';
import pokemonListApi from '../../query/pokemonListApi';
import PokemonCard from '../PokemonCard';
import classes from './index.module.scss';
import { GapBox } from '../../../../components/GapBox';

const PokemonList = ({ limit, offset }: { limit: number; offset: number }) => {
  const router = useRouter();
  const { data } = pokemonListApi.useFetch({ limit, offset });

  const { count } = data || {};
  const totalPages = Math.ceil(count / limit);
  const currentPage = Math.ceil(offset / limit) + 1;

  const [nameInFocus, setNameInFocus] = useState<string | null>(null);

  const onRowOver: MouseEventHandler = (ev) => {
    setNameInFocus(ev.currentTarget.getAttribute('data-name'));
  };

  const onRowOut: MouseEventHandler = (ev) => {
    setNameInFocus(null);
  };

  const onPaginationChange = useCallback(
    (_ev: ChangeEvent<unknown>, page: number) => {
      router.push(
        `/samples/pokemon?limit=${limit}&offset=${(page - 1) * limit}`
      );
    },
    [limit, router]
  );

  return (
    <>
      <Table size="small" className={classes.table}>
        <TableBody>
          {data?.results?.map((pokemon) => (
            <TableRow
              key={pokemon.name}
              hover={true}
              onClick={() => router.push(`/samples/pokemon/${pokemon.name}`)}
            >
              <TableCell>{_.capitalize(pokemon.name)}</TableCell>
              <TableCell className={classes['preview-cell']}>
                <Link href={`/samples/pokemon/${pokemon.name}`}>
                  <VisibilityIcon
                    fontSize={'small'}
                    data-name={pokemon.name}
                    onMouseOver={onRowOver}
                    onMouseOut={onRowOut}
                  />
                  {pokemon.name === nameInFocus && (
                    <div className={classes['preview-modal-container']}>
                      <PokemonCard name={pokemon.name} />
                    </div>
                  )}
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box className={classes['table-footer']}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={onPaginationChange}
        />
        <GapBox>
          <FormLabel htmlFor="rows-per-page">
            Rows per page:
          </FormLabel>
          <Select
            id="rows-per-page"
            placeholder="Offset"
            size="small"
            value={limit}
            onChange={(ev) =>
              router.push(
                `/samples/pokemon?limit=${ev.target.value}&offset=${offset}`
              )
            }
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={50}>50</MenuItem>
          </Select>
        </GapBox>
      </Box>
    </>
  );
};

export default PokemonList;
