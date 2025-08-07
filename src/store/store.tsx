import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./pokemonSlice";
import movesReducer from "./MoveSlice";

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    moves: movesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
