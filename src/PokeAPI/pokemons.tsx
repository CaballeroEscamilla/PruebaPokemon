import { instanceAPI } from "./baseURL";

const endPoint = "pokemon?limit=50&offset=0";

interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

export const pokemons = {
  getAll: (): Promise<PokemonResponse> => {
    return Promise.resolve(instanceAPI.get<PokemonResponse>(endPoint)).then(
      (response) => response.data
    );
  },
};
