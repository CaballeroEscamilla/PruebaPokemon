import { Container, Typography, Grid, Stack, Button } from "@mui/material";
import React from "react";
import { CardsGallery } from "../components/CardsGalery";
import PokedexTable from "../components/PokedexTable";

export const PokedexPage: React.FC<{}> = () => {
  /*const [nbRows, setNbRows] = React.useState(5);
  const setGrid = () => setNbRows((x) => Math.max(0, x - 1));
  const setList = () => setNbRows((x) => Math.min(100, x + 1));*/
  {
    /*onClick={setGrid}*/
  }
  {
    /*onClick={setList}*/
  }
  return (
    <Container sx={{ py: 4 }}>
      <Stack direction="row" spacing={1} sx={{ mb: 1, width: "100%" }}>
        <Stack direction="column" sx={{ width: "60%" }}>
          <Typography variant="h1">Pokedex</Typography>
          <Typography>Welcome to the Pokedex page!</Typography>
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
          >
            Grid
          </Button>
          <Button
            size="small"
            variant="outlined"
            sx={{ height: 50, margin: "auto" }}
          >
            List
          </Button>
        </Stack>
      </Stack>
      <CardsGallery />
      <PokedexTable />
    </Container>
  );
};
