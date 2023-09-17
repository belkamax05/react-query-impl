'use client';

import { Box, MenuItem, Select } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import PokemonList from './components/PokemonList';

const View = ({ limit, offset }: { limit: number; offset: number }) => {
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
      <PokemonList limit={limit} offset={offset} />
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
