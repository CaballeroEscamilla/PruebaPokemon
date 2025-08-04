import { Container } from "@mui/material";

export const pokedex: React.FC<{}> = () => {
  return (
    <Container maxWidth="lg">
      <h1>Pokedex</h1>
      <p>Welcome to the Pokedex page!</p>
      {/* Additional content can be added here */}
    </Container>
  );
};
