import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Typography, Grid } from "@mui/material";
import type { RootState, AppDispatch } from "../store/store";
import { fetchPokemons } from "../store/pokemonSlice";
import { CardComponent } from "./Card";

export const CardsGallery: React.FC<{}> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { pokemons, loading, error } = useSelector(
    (state: RootState) => state.pokemon
  );
  React.useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);
  if (loading) {
    return <Container>Loading...</Container>;
  }
  if (error) {
    return <Container>Error: {error}</Container>;
  }
  return (
    <Grid
      container
      spacing={2}
      padding={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      {pokemons.length > 0 ? (
        pokemons.map((pokemon) => (
          <Grid>
            <CardComponent
              key={pokemon.name}
              picture={pokemon.picture}
              name={pokemon.name}
              Abilities={pokemon.abilities}
              types={pokemon.types}
              onClick={() => navigate(`/pokemon/${pokemon.id}`)}
            />
          </Grid>
        ))
      ) : (
        <Typography>No Pokémon found</Typography>
      )}
    </Grid>
  );
};
