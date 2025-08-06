import React from "react";
import { Container, Stack, Typography } from "@mui/material";
import { PokemonInformationComponent } from "../components/PokemonInfoComponent";
import { SpritesGallery } from "../components/SpritesGalery";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import type { RootState, AppDispatch } from "../store/store";
import { fetchPokemons } from "../store/pokemonSlice";

export const PokemonInformationPage: React.FC<{}> = ({}) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const pokemonId = parseInt(id || "0", 10);
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

  const pokemon = pokemons.find((p) => p.id === pokemonId);

  return (
    <Container sx={{ width: "100%", marginTop: 4 }}>
      <Stack
        sx={{ width: "100%", justifyContent: "center", alignItems: "center" }}
      >
        <Typography variant="h3" sx={{ mb: 2 }}>
          Pokemon Information
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Here you can find detailed information about your favorite Pokemon.
        </Typography>
        {pokemon ? (
          <>
            {pokemon.pictures.length > 0 ? (
              <SpritesGallery key={pokemon.id} sprites={pokemon.pictures} />
            ) : (
              <Typography>No sprites available for this Pokémon</Typography>
            )}
            <PokemonInformationComponent
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              abilities={pokemon.abilities}
              types={pokemon.types}
              moves={pokemon.moves}
            />
          </>
        ) : (
          <Typography>No Pokémon found</Typography>
        )}
      </Stack>
    </Container>
  );
};
