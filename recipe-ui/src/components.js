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
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

// text prop inserts itself into the button
const ButtonUsage = ({ text }) => {
  return (
    <div>
      <Button type="submit" variant="contained" color="primary">
        {" "}
        {text}{" "}
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
    <FormControl sx={{ width: "25ch" }} variant="standard" error = {error}>
      <InputLabel
        htmlFor={id}
        variant="standard"
      >
        {text}
      </InputLabel>
      <Input
        id = {id}
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

// make sure the other files can read these functions (cannot be defaulted)
export { Floater, ButtonUsage, Username, Password, HoverTip };
