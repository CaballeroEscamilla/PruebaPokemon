import React from "react";
import {
  Container,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
} from "@mui/material";

export const SpritesGallery: React.FC<{ sprites: string[] }> = ({
  sprites,
}) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(1);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <TableContainer
      sx={{
        width: "100%",
        marginBottom: 2,
        alignItems: "center",
      }}
    >
      <Table aria-label="sprites gallery">
        <TableBody>
          <TableRow>
            <TableCell sx={{ textAlign: "center" }}>
              {sprites
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((sprite, index) => (
                  <img
                    key={index}
                    src={sprite}
                    alt={`Pokemon sprite ${index}`}
                    style={{
                      maxWidth: "200px",
                      margin: "0 10px",
                      height: "200px",
                      objectFit: "contain",
                    }}
                  />
                ))}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[1]}
        component="div"
        count={sprites.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};
