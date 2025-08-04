import { AppBar, Box, Container, Grid, ListItem, Toolbar } from "@mui/material";

export const NavigationBar: React.FC<{}> = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Container maxWidth="xl">
            <Grid container>
              <Grid size={8}>
                <ListItem></ListItem>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
