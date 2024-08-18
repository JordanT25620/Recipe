import React from "react";

import {
  ButtonUsage,
  Username,
  Password,
  NavBar,
  Floater,
} from "../components.js";

import { Grid, Button, Typography, Container } from "@mui/material";

const Home = () => {
  return (
    <>
      <Grid
        container
        direction="column"
        style={{ height: "100vh", position: "relative" }}
      >
        <Grid item>
          <NavBar />
        </Grid>
        <Grid item padding={2}>
          <center>
            <Typography variant="h5">Recipe Book</Typography>
          </center>
        </Grid>
        <Grid item padding={2}>
          {/* Enter the recipes here */}
        </Grid>
        <Grid
          item
          style={{ position: "absolute", bottom: "15px", right: "15px" }}
        >
          <Floater />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
