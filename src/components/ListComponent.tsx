import React from "react";
import type { CardComponentProps } from "./Card";
import { TableCell, TableRow } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

export const ListComponent: React.FC<CardComponentProps> = ({
  id,
  picture,
  name,
  Abilities,
  types,
  onClick,
}) => {
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  }));

  return (
    <StyledTableRow key={name}>
      <TableCell>{id}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>
        <img
          src={picture}
          alt={`${name} preview`}
          style={{ width: "50px", height: "50px" }}
        />
      </TableCell>
      <TableCell>{types.join(", ")}</TableCell>
      <TableCell>{Abilities.join(", ")}</TableCell>
      <TableCell>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={onClick}
          style={{ marginRight: "8px" }}
        >
          More Info
        </Button>
        <Button variant="contained" color="primary" size="small" disabled>
          Shiny
        </Button>
      </TableCell>
    </StyledTableRow>
  );
};
