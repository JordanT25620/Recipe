import { AppBar, Button, Container, Grid, Toolbar, Typography } from "@mui/material";

const CustomNavBar = () => {
    return (
      <AppBar position="static" style={{ backgroundColor: "lightgray" }}>
        <Container maxWidth="false">
          <Toolbar disableGutters>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Button
                href="/home"
                sx={{
                  "& .MuiTouchRipple-root": {
                    color: "gray", // Change this to your desired ripple color
                  },
                  ":hover": {
                    backgroundColor: "Silver", // Change this to your desired hover color
                  },
                }}
              >
                <Typography variant="h7" style={{ color: "black" }}>
                  Logo
                </Typography>
              </Button>
              <Button
                sx={{
                  "& .MuiTouchRipple-root": {
                    color: "gray", // Change this to your desired ripple color
                  },
                  ":hover": {
                    backgroundColor: "Silver", // Change this to your desired hover color
                  },
                }}
              >
                <Typography variant="h7" style={{ color: "black" }}>
                  Sign Out
                </Typography>
              </Button>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    );
  };

export default CustomNavBar