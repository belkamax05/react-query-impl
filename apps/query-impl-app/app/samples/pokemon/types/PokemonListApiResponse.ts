interface PokemonListResultItem {
  name: string;
  url: string;
}

export default interface PokemonListApiResponse {
  count: number;
  next?: string;
  previous?: string;
  results: PokemonListResultItem[];
}
