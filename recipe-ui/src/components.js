import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from "react";
import Button from '@mui/material/Button';
import Fab from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';




// Create the button
function ButtonUsage() {
    return (
      <div>
        <Button variant="contained">Log in</Button>
      </div>
    );
}

// Floating action button
function Floater(){
  return (
    <div>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </div>
  );
}

function Username() {
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



export default function Password() {
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
      >Password
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

// make sure the other files can read these functions (cannot be defaulted)
export { Floater, ButtonUsage, Username, Password };