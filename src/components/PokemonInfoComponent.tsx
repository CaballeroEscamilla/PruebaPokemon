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

export type PokemonInformationProps = {
  id: number;
  name: string;
  abilities: string[];
  types: string[];
  moves: string[];
};

export const PokemonInformationComponent: React.FC<PokemonInformationProps> = ({
  id,
  name,
  abilities,
  types,
  moves,
}) => {
  return (
    <Stack direction="row" spacing={2} sx={{ mt: 2, border: "1px solid #ccc" }}>
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
        <Card>
          <CardHeader title="Moves" />
          <Divider />
          <Box sx={{ overflowY: "auto", maxHeight: "450px" }}>
            {moves.map((move, index) => (
              <React.Fragment key={index}>
                <Card>
                  <CardHeader title={move} />
                  <CardContent>
                    <Typography variant="body2">{move}</Typography>
                  </CardContent>
                </Card>
                <Divider />
              </React.Fragment>
            ))}
          </Box>
        </Card>
      </Stack>
    </Stack>
  );
};
