import { Container, Typography, Grid } from "@mui/material";
import React from "react";
import { CardsGallery } from "../components/CardsGalery";
import { CardsList } from "../components/CardsList";

export const PokedexPage: React.FC<{}> = () => {
  /*const dispatch = useDispatch<AppDispatch>();
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
  }*/

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h1">Pokedex</Typography>
      <Typography>Welcome to the Pokedex page!</Typography>
      <CardsList />
    </Container>
  );
};
