import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PokemonResponse, PokemonDetailsFull } from "../PokeAPI/pokemons";
import { pokemons } from "../PokeAPI/pokemons";

interface PokemonFiltered {
  id: number;
  name: string;
  abilities: string[];
  types: string[];
  pictures: string[];
  moves: string[];
}

// Estado del slice
interface PokemonState {
  pokemons: PokemonFiltered[];
  loading: boolean;
  error: string | null;
}

const initialState: PokemonState = {
  pokemons: [],
  loading: false,
  error: null,
};

// Thunk para obtener y filtrar al Pokémon
export const fetchPokemons = createAsyncThunk(
  "pokemon/fetchPokemons",
  async () => {
    const response = await pokemons.getAll();
    // Obtener detalles de cada Pokémon
    const pokemonDetails = await Promise.all(
      response.results.map(async (pokemon) => {
        const id = parseInt(pokemon.url.split("/").slice(-2)[0]); // Funcion donde extraje el ID de la URL
        const details = await pokemons.getById(id);
        const pictures = [
          details.sprites.front_default,
          details.sprites.back_default,
          details.sprites.front_shiny,
          details.sprites.back_shiny,
          details.sprites.front_female,
          details.sprites.back_female,
          details.sprites.front_shiny_female,
          details.sprites.back_shiny_female,
        ].filter(
          (sprite): sprite is string => sprite !== null && sprite !== undefined
        );
        return {
          id: details.id,
          name: details.name,
          abilities: details.abilities.map((ability) => ability.ability.name),
          types: details.types.map((type) => type.type.name),
          pictures,
          moves: details.moves.map((move) => move.move.name),
        };
      })
    );
    return pokemonDetails;
  }
);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.loading = false;
        state.pokemons = action.payload;
      })
      .addCase(fetchPokemons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch pokemons";
      });
  },
});

export default pokemonSlice.reducer;
