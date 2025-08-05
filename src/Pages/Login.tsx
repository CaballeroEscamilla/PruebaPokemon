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
import { useNavigate } from "react-router-dom";

type LoginPageType = {
  email: string;
  password: string;
};

export const LoginPage: React.FC<{}> = () => {
  const navigate = useNavigate();

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

    navigate("/pokedex");
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
