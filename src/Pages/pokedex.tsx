import {
  Container,
  Typography,
  Stack,
  Button,
  TextField,
  Autocomplete,
  CircularProgress,
} from "@mui/material";
import React, { useMemo, useState } from "react";
import { CardsGallery } from "../components/CardsGalery";
import PokedexTable from "../components/PokedexTable";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../store/store";
import { fetchPokemons } from "../store/pokemonSlice";

export const PokedexPage: React.FC = () => {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [selectedPokemon, setSelectedPokemon] = useState<{
    id: number;
    name: string;
  } | null>(null);

  const setGrid = () => setView("grid");
  const setList = () => setView("list");

  const dispatch = useDispatch<AppDispatch>();
  const { pokemons, loading, error } = useSelector(
    (state: RootState) => state.pokemon
  );

  const pokemonsOptions = useMemo(
    () => pokemons.map((pokemon) => ({ id: pokemon.id, name: pokemon.name })),
    [pokemons]
  );

  React.useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);
  if (loading) {
    console.log("Loading...");
  }
  if (error) {
    console.error("Error cargando las opciones", error);
  }

  return (
    <Container sx={{ py: 4 }}>
      <Stack direction="row" spacing={1} sx={{ mb: 1, width: "100%" }}>
        <Stack direction="column" sx={{ width: "60%" }}>
          <Typography variant="h3">Pokedex</Typography>
          <Autocomplete
            disablePortal
            options={pokemonsOptions}
            getOptionLabel={(option) => option.name}
            onChange={(_event, newValue) => setSelectedPokemon(newValue)}
            value={selectedPokemon}
            sx={{ width: 300, marginTop: 2 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Pokémon"
                slotProps={{
                  input: {
                    ...params.InputProps,
                    endAdornment: (
                      <>
                        {loading && (
                          <CircularProgress color="inherit" size={20} />
                        )}
                        {params.InputProps.endAdornment}
                      </>
                    ),
                  },
                }}
              />
            )}
            noOptionsText="No se encontraron Pokémon"
          />
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          sx={{ width: "40%", paddingTop: 5 }}
          justifyContent="flex-end"
        >
          <Button
            size="small"
            variant="outlined"
            sx={{ height: 50, margin: "auto" }}
            onClick={setGrid}
          >
            Grid
          </Button>
          <Button
            size="small"
            variant="outlined"
            sx={{ height: 50, margin: "auto" }}
            onClick={setList}
          >
            List
          </Button>
        </Stack>
      </Stack>
      {view === "grid" ? <CardsGallery /> : <PokedexTable />}
    </Container>
  );
};
