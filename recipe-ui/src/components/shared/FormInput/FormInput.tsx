import { TextField, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FieldError, FieldValues, Path, UseFormRegister } from 'react-hook-form';
import { useToggle } from '../../../hooks/useToggle';

interface FormInputProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  type?: string;
  register: UseFormRegister<T>;
  error?: FieldError;
}

const FormInput = <T extends FieldValues>({
  name,
  label,
  type = 'text',
  register,
  error
}: FormInputProps<T>) => {
  const [showPassword, toggleShowPassword] = useToggle(false);

  return (
    <TextField
      {...register(name)}
      label={label}
      type={type === 'password' && !showPassword ? 'password' : 'text'}
      variant="outlined"
      fullWidth
      margin="normal"
      error={!!error}
      helperText={error?.message}
      InputProps={{
        endAdornment: type === 'password' && (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={toggleShowPassword}
              edge="end"
              sx={{
                padding: 1,
                '&:focus': {
                  outline: 'none',
                },
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              }}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: 2,
        },
        '& .MuiFormLabel-root': {
          color: '#333',
        },
        '& .MuiInputBase-input': {
          color: '#333',
        },
        '& .MuiFormHelperText-root': {
          color: '#d32f2f',
        },
        '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
          borderColor: '#d32f2f',
        },
      }}
    />
  );
};

export default FormInput;