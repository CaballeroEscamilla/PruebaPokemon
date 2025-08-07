import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoves } from "../store/MoveSlice";
import type { AppDispatch, RootState } from "../store/store";

export type PokemonInformationProps = {
  id: number;
  name: string;
  abilities: string[];
  types: string[];
  movements: string[];
};

export const PokemonInformationComponent: React.FC<PokemonInformationProps> = ({
  id,
  name,
  abilities,
  types,
  movements,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { moves, loading, error } = useSelector(
    (state: RootState) => state.moves
  );
  React.useEffect(() => {
    dispatch(fetchMoves());
  }, [dispatch]);
  if (loading) {
    return <Box>Loading...</Box>;
  }
  if (error) {
    return <Box>Error: {error}</Box>;
  }
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        mt: 2,
        border: "1px solid #ccc",
        maxHeight: "250px",
      }}
    >
      <Stack sx={{ width: "60%", justifyContent: "flex-end", margin: 2 }}>
        <Card sx={{ padding: 2 }}>
          <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
            <Typography variant="h4">{name}</Typography>
            {types.map((type, index) => (
              <Typography variant="body2" key={index}>
                {type}
              </Typography>
            ))}
          </Box>
          <CardContent>
            <Typography variant="body2">
              Information about this Pokemon.
            </Typography>
          </CardContent>
        </Card>
        <Divider />
        <Card>
          <CardContent>
            <Typography variant="h5">Abilities</Typography>
            <Divider />
            {abilities.map((ability, index) => (
              <React.Fragment key={index}>
                <Typography variant="body2">{ability}</Typography>
                <Divider />
              </React.Fragment>
            ))}
          </CardContent>
        </Card>
      </Stack>
      <Stack sx={{ width: "40%", justifyContent: "flex-start" }}>
        <Card
          sx={{
            maxHeight: "250px",
          }}
        >
          <CardHeader title="Moves" />
          <Divider />
          <Box sx={{ overflowY: "auto", maxHeight: "200px" }}>
            {movements.map((movement, index) =>
              moves.map((move) =>
                index + 1 === move.id ? (
                  <Card key={index}>
                    <CardHeader title={movement} />
                    <CardContent
                      sx={{ display: "flex", flexDirection: "column" }}
                    >
                      <Typography variant="body2">Type: {move.type}</Typography>
                      <Typography variant="body2">
                        Accuracy: {move.accuracy}
                      </Typography>
                      <Typography variant="body2">
                        Power: {move.power}
                      </Typography>
                    </CardContent>
                  </Card>
                ) : null
              )
            )}
          </Box>
        </Card>
      </Stack>
    </Stack>
  );
};
