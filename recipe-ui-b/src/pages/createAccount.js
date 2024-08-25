import React, { useState } from "react";
import { Grid, Button, Typography, Container } from "@mui/material";
import { Username, Password, HoverTip } from "../components.js";
import { useNavigate } from "react-router-dom";

// Added to reduce redundancy
const FieldWithTooltip = ({ field, tooltipText }) => (
  <Grid container spacing={2} alignItems="center" style={{ marginLeft: "2%" }}>
    <Grid item xs={10}>
      {field}
    </Grid>
    <Grid item xs={2} style={{ marginTop: "5%" }}>
      <HoverTip text={tooltipText} />
    </Grid>
  </Grid>
);

const CreateAccount = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    confirm_password: "",
  });

  const [errors, setErrors] = useState({
    username: false,
    password: false,
    confirm_password: false,
  });

  const [helperTexts, setHelperTexts] = useState({
    username: "",
    password: "",
    confirm_password: "",
  });

  const navigate = useNavigate();

  const handleRedirect = (event) => {
    event.preventDefault();
    navigate("/login");
  };

  //submitting the form
  const handleSubmit = (event) => {
    event.preventDefault();

    //if inputs are valid
    if (handleValidation(inputs)) {
      //submit form
    }
  };

  const handleValidation = (inputs) => {
    //reset errors and helper texts
    let valid = true;
    const newErrors = {
      username: false,
      password: false,
      confirm_password: false,
    };
    const newHelperTexts = {
      username: "",
      password: "",
      confirm_password: "",
    };

    if (!inputs.username) {
      newErrors.username = true;
      newHelperTexts.username = "Username is required";
      valid = false;
    } else if (inputs.username.length < 2) {
      newErrors.username = true;
      newHelperTexts.username = "Username must be at least 2 characters long";
      valid = false;
    } else if (inputs.username.length > 30) {
      newErrors.username = true;
      newHelperTexts.username = "Username must not exceed 30 characters";
      valid = false;
    }

    if (!inputs.password) {
      newErrors.password = true;
      newHelperTexts.password = "Password is required";
      valid = false;
    } else if (inputs.password.length < 7) {
      newErrors.password = true;
      newHelperTexts.password = "Password must be at least 7 characters long";
      valid = false;
    } else if (inputs.password.length > 40) {
      newErrors.password = true;
      newHelperTexts.password = "Password must not exceed 40 characters";
      valid = false;
    }

    if (!inputs.confirm_password) {
      newErrors.confirm_password = true;
      newHelperTexts.confirm_password = "Confirm Password is required";
      valid = false;
    } else if (inputs.password !== inputs.confirm_password) {
      newErrors.confirm_password = true;
      newHelperTexts.confirm_password = "Passwords do not match";
      valid = false;
    }

    setErrors(newErrors);
    setHelperTexts(newHelperTexts);

    return valid;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container component="main" maxWidth="xs">
        <Grid
          container
          spacing={2}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100vh", marginTop: "-35%" }}
        >
          {/* Register Header */}
          <Grid item>
            <Typography variant="h4" component="h1">
              Register
            </Typography>
          </Grid>

          {/* Username Field */}
          <Grid item xs={12}>
            <FieldWithTooltip
              field={
                <Username
                  id="username"
                  name="username"
                  value={inputs.username}
                  onChange={handleChange}
                  error={errors.username}
                  helperText={helperTexts.username}
                />
              }
              tooltipText="Must be unique and at least 2 characters long"
            />
          </Grid>

          {/* Password Field */}
          <Grid item xs={12}>
            <FieldWithTooltip
              field={
                <Password
                  id="password"
                  name="password"
                  value={inputs.password}
                  onChange={handleChange}
                  text="Password"
                  error={errors.password}
                  helperText={helperTexts.password}
                />
              }
              tooltipText="Must be at least 7 characters long"
            />
          </Grid>

          {/* Confirm Password Field */}
          <Grid item xs={12}>
            <FieldWithTooltip
              field={
                <Password
                  id="confirm_password"
                  name="confirm_password"
                  value={inputs.confirm_password}
                  onChange={handleChange}
                  text="Confirm Password"
                  error={errors.confirm_password}
                  helperText={helperTexts.confirm_password}
                />
              }
              tooltipText="Ensure both passwords match"
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button variant="contained" type="submit" color="primary">
              Register
            </Button>
          </Grid>

          {/* Already have an account? */}
          <Grid item xs={12} style={{ marginTop: "18%" }}>
            <Typography variant="body2" align="center">
              Already have an account?{" "}
              <Button
                type="button"
                color="primary"
                size="large"
                onClick={handleRedirect}
              >
                Log in
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </form>
  );
};

export default CreateAccount;
