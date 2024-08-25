import React, { useState } from "react";

import { ButtonUsage, NavBar } from "../components.js";

import { Grid, Button, Typography, TextField, IconButton } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

const CreateRecipe = () => {
  // hook for ingredients
  const [ingredients, setIngredients] = useState([]);
  // add a new ingredient
  const addIngredient = () => {
    setIngredients([...ingredients, ""]);
  };
  // remove a ingredient
  const removeIngredient = (index) => {
    const newIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(newIngredients);
  };

  // keep track of ingredients
  const handleChange = (index, event) => {
    const newIngredients = ingredients.slice();
    newIngredients[index] = event.target.value;
    setIngredients(newIngredients);
  };

  return (
    <>
      <Grid
        container
        direction="column"
        style={{ height: "100vh", position: "relative" }}
      >
        {/* Navigation Bar */}
        <Grid item>
          <NavBar />
        </Grid>

        {/* Title (Create Recipe) */}
        <Grid item padding={2}>
          <center>
            <Typography variant="h5">Create Recipe</Typography>
          </center>
        </Grid>

        {/* Fields of the recipe */}

        {/* Name of Recipe */}
        <Grid item padding={2}>
          <center>
            <TextField
              sx={{ width: "40ch" }}
              variant="standard"
              label="Name of Recipe"
              // Make sure they can't type more than 100 characters
              inputProps={{ maxLength: 100 }}
            />
          </center>
        </Grid>

        {/* Ingredients */}
        <Grid item padding={2}>
          <center>
            <Typography variant="h6">Ingredients:</Typography>

            {/* This is the part where you can add or remove ingredients */}
            {ingredients.map((ingredient, index) => (
              <div key={index}>
                <TextField
                  variant="outlined"
                  value={ingredient}
                  onChange={(event) => handleChange(index, event)}
                  InputProps={{
                    endAdornment: (
                      // icon for removing the ingredients
                      <IconButton
                        edge="end"
                        onClick={() => removeIngredient(index)}
                      >
                        <CloseIcon />
                      </IconButton>
                    ),
                    maxLength: 100,
                  }}
                />
              </div>
            ))}

            {/* Add new ingredient button */}
            <Button onClick={addIngredient}>+ Add ingredient</Button>
          </center>
        </Grid>

        {/* Directions */}
        <Grid item padding={2}>
          <center>
            <TextField
              label="Directions / Other Notes"
              sx={{ width: "40ch" }}
              multiline
              rows={10}
              variant="outlined"
              inputProps={{ maxLength: 1000 }}
            ></TextField>
          </center>
        </Grid>

        {/* Create Recipe Button */}
        <Grid item padding={2}>
          <center>
            <ButtonUsage text="Create Recipe"></ButtonUsage>
          </center>
        </Grid>
      </Grid>
    </>
  );
};

export default CreateRecipe;