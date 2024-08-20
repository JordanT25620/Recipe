import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React from "react";
import {
  Button,
  Fab,
  TextField,
  IconButton,
  Input,
  InputLabel,
  InputAdornment,
  FormControl,
  Tooltip,
  FormHelperText,
  Container,
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Box,
  OutlinedInput,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import CloseIcon from "@mui/icons-material/Close";
import "./App.css";

// text prop inserts itself into the button
const ButtonUsage = ({ text }) => {
  return (
    <div>
      <Button type="submit" variant="contained" color="primary">
        {text}
      </Button>
    </div>
  );
};

// Floating action button
const Floater = () => {
  return (
    <div>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </div>
  );
};

// Username entry component
const Username = ({ name, value, onChange, error, helperText }) => {
  return (
    <>
      <TextField
        error={error}
        helperText={error ? helperText : ""}
        sx={{ width: "25ch" }}
        variant="standard"
        id={name}
        label="Username"
        name={name}
        value={value}
        onChange={onChange}
        autoComplete="username"
      />
    </>
  );
};

// Password entry component
const Password = ({ text, onChange, name, value, error, helperText, id }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <FormControl sx={{ width: "25ch" }} variant="standard" error={error}>
      <InputLabel htmlFor={id} variant="standard">
        {text}
      </InputLabel>
      <Input
        id={id}
        type={showPassword ? "text" : "password"}
        name={name}
        value={value}
        onChange={onChange}
        error={error}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      {helperText && (
        <FormHelperText error={error}>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
};

const HoverTip = ({ text }) => {
  return (
    <div>
      <Tooltip title={text} disableInteractive arrow enterTouchDelay={0}>
        <Button
          size="small"
          variant="outlined"
          style={{
            borderRadius: "50%",
            width: "24px",
            height: "24px",
            minWidth: "24px",
          }}
        >
          <QuestionMarkIcon
            style={{
              width: "16px",
              height: "16px",
            }}
          />
        </Button>
      </Tooltip>
    </div>
  );
};

const NavBar = () => {
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

const Recipe = () => {
  return (
    <Box sx={{ p: 0.5 }}>
      <center>
        <Box
          component="section"
          sx={{
            width: "80%",
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
              height: "100%", // Ensures the Button takes up the full height of the Box
              display: "flex",
              flexDirection: "column", // Allows content inside Button to be laid out in a column
              borderRadius: 4,
              color: "black",
              ":hover": {
                backgroundColor: "Silver", // Change this to your desired hover color
              },
            }}
          >
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Typography variant="h5">Spaghetti Bolognese</Typography>
              </Grid>
              <Grid container item spacing={2} wrap="wrap">
                <Grid item xs={4}>
                  <Typography variant="h7">Spaghetti Noodles</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h7">Hot sauce</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h7">Meatballs</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h7">Garlic Bread</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h7">Spices and herbs</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h7">Vinegar</Typography>
                </Grid>
              </Grid>
            </Grid>
            {/* <Typography>**Stuff that goes inside the box**</Typography> */}
          </Button>
        </Box>
      </center>
    </Box>
  );
};

// make sure the other files can read these functions (cannot be defaulted)
export {
  Floater,
  ButtonUsage,
  Username,
  Password,
  HoverTip,
  NavBar,
  Recipe,
};
