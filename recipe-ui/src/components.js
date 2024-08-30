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
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import "./App.css";
import logo from "./logo512.png";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleRedirect = (event) => {
    event.preventDefault();
    navigate("/create");
  };

  return (
    <div className="floater">
      <Fab color="primary" onClick={handleRedirect}>
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
              <img className="home_icon" src={logo} alt="icon"></img>
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

const Recipe = ({ width, title, instructions, ingredients }) => {
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
              {/* TITLE */}
              <Typography
                variant="h5"
                sx={{
                  textAlign: "left",
                  marginBottom: 1,
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 1, // Adjust this to control how many lines to show
                }}
              >
                {title}
              </Typography>
            </Grid>
            <Grid container item spacing={2} wrap="wrap">
              <Grid item>
                {/* INGREDIENTS */}
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: "left",
                    marginBottom: 1,
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 3, // Adjust this to control how many lines to show
                  }}
                >
                  {ingredients}
                </Typography>
              </Grid>
              {/* INSTRUCTIONS */}
              <Grid item>
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: "left",
                    marginBottom: 1,
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 3, // Adjust this to control how many lines to show
                  }}
                >
                  {instructions}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Button>
      </Box>
    </Box>
  );
};

export default Recipe;

// make sure the other files can read these functions (cannot be defaulted)
export { Floater, ButtonUsage, Username, Password, HoverTip, NavBar, Recipe };
