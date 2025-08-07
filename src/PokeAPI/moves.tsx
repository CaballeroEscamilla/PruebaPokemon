import { instanceAPI } from "./baseURL";

const endPoint = "move";

export interface Movement {
  name: string;
  url: string;
}

export interface MovementResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Movement[];
}

export interface MovementDetailsFull {
  accuracy: number; //Esta es una caracteristica importante de los movimientos
  contest_combos: unknown | null;
  contest_effect: unknown[];
  contest_type: unknown[];
  damage_class: unknown[];
  effect_chance: number | null;
  effect_changes: unknown[];
  effect_entries: unknown[];
  flavor_text_entries: unknown[];
  generation: unknown[];
  id: number; // Esta es una caracteristica importante de los movimientos
  learned_by_pokemon: unknown[];
  machines: unknown[];
  meta: unknown[];
  name: string;
  names: unknown[];
  past_values: unknown[];
  power: number | null;
  pp: number;
  priority: number;
  stat_changes: unknown[];
  super_contest_effect: unknown[];
  target: unknown[];
  type: {
    name: string;
    url: string;
  };
}

export const moves = {
  getAll: (): Promise<MovementResponse> => {
    return Promise.resolve(instanceAPI.get<MovementResponse>(endPoint)).then(
      (response) => response.data
    );
  },
  getById: (id: number): Promise<MovementDetailsFull> => {
    return Promise.resolve(
      instanceAPI.get<MovementDetailsFull>(`move/${id}`)
    ).then((response) => response.data);
  },
};
