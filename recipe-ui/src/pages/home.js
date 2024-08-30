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

      <Container maxWidth="100%">
        <Grid
          container
          spacing={2}
          direction="row"
          wrap="wrap"
          justifyContent="flex-start"
        >
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Recipe
              title="Spaghetti Bolognese"
              ingredients="1 1/2 tbsp olive oil, 2 garlic cloves (minced), 1 onion (finely chopped (brown, yellow, or white)), 1 lb / 500g beef mince (ground beef) (OR half pork, half beef (Note 1)), 1/2 cup (125 ml) dry red wine (sub water or beef broth/stock)"
              instructions="Saute- Heat oil in a large pot or deep skillet over medium high heat. Add onion and garlic, cook for 3 minutes or until light golden and softened. Cook beef- Turn heat up to high and add beef. Cook, breaking it up as you go, until browned."
            />
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
