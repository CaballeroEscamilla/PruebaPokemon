import { instanceAPI } from "./baseURL";

const endPoint = "pokemon?limit=50&offset=0";

export interface Pokemon {
  name: string;
  url: string;
}

interface Ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}
interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}
interface Move {
  move: {
    name: string;
    url: string;
  };
  version_group_details: unknown[];
}
interface Sprites {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
  other: unknown[];
  versions: unknown[];
}

export interface PokemonResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

export interface PokemonDetailsFull {
  abilities: Ability[]; //Este es una caracteristica importante
  base_experience: unknown;
  cries: unknown[];
  forms: unknown[];
  game_indices: unknown[];
  height: number;
  held_items: unknown[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[]; //Este es una caracteristica importante
  name: string;
  order: number;
  past_abilities: unknown[];
  past_types: unknown[];
  species: unknown;
  sprites: Sprites; //Este es una caracteristica importante
  stats: unknown[];
  types: Type[]; //Este es una caracteristica importante
  weight: unknown;
}
export const pokemons = {
  getAll: (): Promise<PokemonResponse> => {
    return Promise.resolve(instanceAPI.get<PokemonResponse>(endPoint)).then(
      (response) => response.data
    );
  },
  getById: (id: number): Promise<PokemonDetailsFull> => {
    return Promise.resolve(
      instanceAPI.get<PokemonDetailsFull>(`pokemon/${id}`)
    ).then((response) => response.data);
  },
};
