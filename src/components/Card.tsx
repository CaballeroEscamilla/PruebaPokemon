import React from "react";
import { Divider, Typography } from "@mui/material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";

export type CardComponentProps = {
  id: number;
  picture: string;
  name: string;
  Abilities: String[];
  types: String[];
  onClick: () => void;
};

export const CardComponent: React.FC<CardComponentProps> = ({
  picture,
  name,
  Abilities,
  types,
  onClick,
}) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        width: "100%",
        minHeight: 350,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        component="img"
        height={140}
        image={picture}
        alt={name}
        sx={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography variant="h4">{name}</Typography>
        <Divider />
        <Typography variant="body2" sx={{ mt: 2 }}>
          Abilities: {Abilities.join(", ")}
        </Typography>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Types: {types.join(", ")}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          size="small"
          color="primary"
          onClick={onClick}
        >
          Learn More
        </Button>
        <Button variant="outlined" size="small" color="primary" disabled>
          <Typography>Shiny</Typography>
        </Button>
      </CardActions>
    </Card>
  );
};
