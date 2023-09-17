interface PokemonStatItem {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export default interface PokemonApiResponse {
  weight: number;
  height: number;
  name: string;
  id: number;
  base_experience: number;
  abilities: unknown;
  forms: unknown;
  game_indices: unknown;
  held_items: unknown[];
  is_default: boolean;
  location_area_encounters: string;
  moves: unknown[];
  order: number;
  species: unknown;
  sprites: {
    front_default: string;
  };
  stats: PokemonStatItem[];
  types: unknown[];
}
