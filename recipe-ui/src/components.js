import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from "react";
import { Button, Fab, TextField, IconButton, Input, InputLabel, InputAdornment, FormControl, Tooltip } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

// text prop inserts itself into the button
const ButtonUsage = ({text}) => {
    return (
      <div>
        <Button type="submit" variant="contained" color="primary"> {text} </Button>
      </div>
    );
}

// Floating action button
const Floater = () => {
  return (
    <div>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </div>
  );
}

// Username entry component
const Username = () => {
  return (
    <div>
      <TextField
        sx={{width: '25ch' }}
        variant="standard"
        required
        id="username"
        label="Username"
        name="username"
        autoComplete="username"
      />
    </div>
  );
}


// Password entry component
const Password = ({text}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <FormControl sx={{width: '25ch' }} variant="standard">
      <InputLabel htmlFor="standard-adornment-password"
        required
        variant="standard"
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      >{text}
      </InputLabel>
      <Input
        id="standard-adornment-password"
        type={showPassword ? 'text' : 'password'}
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
    </FormControl>
  )
}

const HoverTip = ({ text }) => {
  return (
    <div>
      <Tooltip title={text} disableInteractive arrow>
        <Button size="small" variant="outlined"
          style={{
            borderRadius: '50%',
            width: '24px',
            height: '24px',
            minWidth: '24px',
          }}>
          <QuestionMarkIcon
            style={{
              width: '16px',
              height: '16px',
            }}
          />
        </Button>
      </Tooltip>
    </div>
  )
}



// make sure the other files can read these functions (cannot be defaulted)
export { Floater, ButtonUsage, Username, Password, HoverTip };