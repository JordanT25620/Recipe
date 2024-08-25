import React from "react";

import { NavBar, Recipe, Floater } from "../components.js";

import { Grid, Typography, Container } from "@mui/material";
import "../App.css";

const Home = () => {
  return (
    <>
      <NavBar />
      <center>
        <Typography variant="h5" padding={2}>
          Recipe Book
        </Typography>
      </center>

      <Container maxWidth='100%'>
        <Grid
          container
          spacing={2}
          direction="row"
          wrap="wrap"
          justifyContent="flex-start"
        >
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Recipe />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Recipe />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Recipe />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Recipe />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Recipe />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Recipe />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Recipe />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Recipe />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Recipe />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Recipe />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Recipe />
          </Grid>
        </Grid>
        <Floater />
      </Container>

    </>
  );
};

export default Home;
