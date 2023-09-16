'use client';

import { Box, MenuItem, Select } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import pokemonListApi from '../../query/pokemonListApi';

const View = ({ limit, offset }: { limit: number; offset: number }) => {
  const { data } = pokemonListApi.useFetch({ limit, offset });
  const router = useRouter();

  return (
    <div>
      <h1>Pokemon view</h1>
      <Select
        placeholder="Offset"
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
      <table>
        <tbody>
          {data?.results?.map((pokemon) => (
            <tr key={pokemon.name}>
              <td>
                <Link href={`/samples/pokemon/${pokemon.name}`}>
                  {pokemon.name}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
      <Box display={'flex'} gap={1}>
        <Link
          href={`/samples/pokemon?limit=${limit}&offset=${Math.max(
            offset - limit,
            0
          )}`}
        >
          Prev
        </Link>
        <Link href={`/samples/pokemon?limit=${limit}&offset=${offset + limit}`}>
          Next
        </Link>
      </Box>
    </div>
  );
};

export default View;
