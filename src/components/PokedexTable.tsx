import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState, AppDispatch } from "../store/store";
import { fetchPokemons } from "../store/pokemonSlice";
import { ListComponent } from "./ListComponent";

// Datos de ejemplo para la tabla
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: "bold",
  backgroundColor: theme.palette.grey[200],
}));

export const PokedexTable: React.FC<{}> = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
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
    <TableContainer component={Paper} sx={{ maxWidth: "100%", margin: "auto" }}>
      <Table aria-label="pokedex table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{ color: "black" }}>#</StyledTableCell>
            <StyledTableCell sx={{ color: "black" }}>Nombre</StyledTableCell>
            <StyledTableCell sx={{ color: "black" }}>
              Vista Previa
            </StyledTableCell>
            <StyledTableCell sx={{ color: "black" }}>Tipos</StyledTableCell>
            <StyledTableCell sx={{ color: "black" }}>
              Habilidades
            </StyledTableCell>
            <StyledTableCell sx={{ color: "black" }}>Acción</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pokemons.length > 0 ? (
            pokemons
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((pokemon) => (
                <ListComponent
                  id={pokemon.id}
                  key={pokemon.name}
                  picture={pokemon.pictures[0]}
                  name={pokemon.name}
                  Abilities={pokemon.abilities}
                  types={pokemon.types}
                  onClick={() => navigate(`/pokemon/${pokemon.id}`)}
                />
              ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} align="center">
                <Typography>No Pokémon found</Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={pokemons.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default PokedexTable;
