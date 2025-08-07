import { moves } from "../PokeAPI/moves";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface MoveFiltered {
  id: number;
  name: string;
  type: string;
  power: number;
  accuracy: number;
}

interface MoveState {
  moves: MoveFiltered[];
  loading: boolean;
  error: string | null;
}

const initialState: MoveState = {
  moves: [],
  loading: false,
  error: null,
};

export const fetchMoves = createAsyncThunk("move/fetchMoves", async () => {
  const response = await moves.getAll();
  const movementDetails = await Promise.all(
    response.results.map(async (pokemon) => {
      const id = parseInt(pokemon.url.split("/").slice(-2)[0]); // Funcion donde extraje el ID de la URL
      const details = await moves.getById(id);
      return {
        id: details.id,
        name: details.name,
        type: details.type.name,
        power: details.power || 0,
        accuracy: details.accuracy || 0,
      } as MoveFiltered;
    })
  );
  return movementDetails;
});

const movesSlice = createSlice({
  name: "moves",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMoves.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMoves.fulfilled, (state, action) => {
        state.loading = false;
        state.moves = action.payload;
      })
      .addCase(fetchMoves.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch moves";
      });
  },
});

export default movesSlice.reducer;
