import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Container, Typography, Box} from '@mui/material';
import FormInput from '../components/shared/FormInput/FormInput';
import SubmitButton from '../components/shared/SubmitButton/SubmitButton';
import AuthLink from '../components/shared/AuthLink/AuthLink';
import loginValidationSchema from '../form-validation/LoginValidationSchema';
import LoginFormModel from '../models/form-models/LoginFormModel';
import { authenticateUser } from '../services/AuthService';
import useAuthContext from '../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';
import AuthResponse from '../models/response-models/AuthResponse';
import ApiError from '../utils/error-handling/ApiError';
import { Bounce, toast, ToastContainer } from 'react-toastify';

const LoginPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, /*setError*/ } = useForm<LoginFormModel>({
    resolver: yupResolver(loginValidationSchema),
  });

  const { login } = useAuthContext();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginFormModel> = async (formData: LoginFormModel) => {
    const result : AuthResponse | ApiError = await authenticateUser(formData);
    if (result instanceof ApiError) {
      const apiError : ApiError = result;
      toast.info(apiError.message, {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
      //setError('username', { type: 'manual', message: 'Invalid username or password' });
    } else {
      const authResponse : AuthResponse = result;
      login(authResponse.user, authResponse.token)
      navigate('/home');
    }
  };

  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          height: '100vh',
          width: '100vw',
          display: 'flex',
          backgroundColor: '#f5f5f5',
          padding: 4,
        }}
      >
        <Box
          sx={{
            backgroundColor: '#ffffff',
            padding: 4,
            borderRadius: 2,
            boxShadow: 3,
            maxWidth: 500,
            textAlign: 'center',
            boxSizing: 'border-box',
            margin: 'auto',
          }}
        >
          <Typography variant="h5" component="h1" gutterBottom>
            Sign In
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormInput
              name="username"
              label="Username"
              register={register}
              error={errors.username}
            />
            <FormInput
              name="password"
              label="Password"
              type="password"
              register={register}
              error={errors.password}
            />
            <SubmitButton style={{ marginTop: 16 }}>
              Sign In
            </SubmitButton>
          </form>
          <AuthLink
            questionText="Don't have an account?"
            linkText="Create one"
            linkTo="/register"
          />
        </Box>
      </Container>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        limit={1}
      />
    </>
  ); //end return;
}; //end LoginPage

export default LoginPage;