import { Box, Button, Grid, Typography } from "@mui/material";

const Recipe = ({ width } : { width: number }) => {
    return (
      <Box sx={{ padding: 0.5 }}>
        <Box
          component="section"
          sx={{
            width: { width },
            backgroundColor: "lightgray",
            borderRadius: 4,
            display: "flex",
            height: "250px",
          }}
        >
          <Button
            variant="text"
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              borderRadius: 4,
              color: "black",
              textAlign: "left",
              textTransform: "none",
              padding: 2,
              boxSizing: "border-box",
              overflow: "hidden", // Change to auto to allow scrolling if needed
              alignItems: "flex-start", // Align items to start to avoid centering issues
              justifyContent: "flex-start", // Align items to start to handle vertical alignment
              ":hover": {
                backgroundColor: "Silver",
              },
            }}
          >
            <Grid container direction="column" spacing={2} sx={{ width: "100%" }}>
              <Grid item>
                <Typography
                  variant="h5"
                  sx={{ textAlign: "left", marginBottom: 1 }}
                >
                  Spaghetti Bolognese
                </Typography>
              </Grid>
              <Grid container item spacing={2} wrap="wrap">
                <Grid item>
                  <Typography
                    variant="body1"
                    sx={{ textAlign: "left", marginBottom: 1 }}
                  >
                    Spaghetti Noodles, Bingo bango bongo, Dingo dango songo, etc,
                    etc, bingo bango bingo bongo bango, justify content yessir
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="body1"
                    sx={{ textAlign: "left", marginBottom: 1 }}
                  >
                    Spaghetti Noodles, Bingo bango bongo, Dingo dango songo, etc,
                    etc, bingo bango bingo bongo bango, justify content yessir
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            {/* <Typography>**Stuff that goes inside the box**</Typography> */}
          </Button>
        </Box>
      </Box>
    );
  };

export default Recipe