import { configureStore } from "@reduxjs/toolkit";

let pokemonReducer = {};

const store = configureStore({
  reducer: {
    data: {
        pokemon: pokemonReducer,
    },
  },
});

export default store;
