import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import React from "react";
//import { pokemons } from "./PokeAPI/pokemons";

type LoginPageType = {
  email: string;
  password: string;
};

export const LoginPage: React.FC<{}> = () => {
  const [loginData, setLoginData] = React.useState<LoginPageType>({
    email: "",
    password: "",
  });

  const dataLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Login Data:", loginData);
    //location.href = "/pokedex"; // Redirect to Pokedex page after login
    /*React.useEffect(() => {
      pokemons
        .getAll()
        .then((response) => {
          console.log(response.results);
        })
        .catch((error: unknown) => {
          console.error("Error fetching pokemons:", error);
        });
    }, []);*/
  };

  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid>
          <Paper sx={{ padding: 2, borderRadius: 2, boxShadow: 3 }}>
            <Typography variant="h3" align="center">
              Pokedex
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                sx={{ mt: 2, mb: 1.5 }}
                required
                onChange={dataLogin}
                name="email"
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                required
                onChange={dataLogin}
                name="password"
              />
              <Button
                sx={{ mt: 1.5, mb: 1.5 }}
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Iniciar sesion
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
