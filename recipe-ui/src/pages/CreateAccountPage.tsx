import { yupResolver } from '@hookform/resolvers/yup';
import { Container, Typography, Box } from '@mui/material';
import FormInput from '../components/shared/FormInput/FormInput';
import SubmitButton from '../components/shared/SubmitButton/SubmitButton';
import { useForm, SubmitHandler } from 'react-hook-form';
import AuthLink from '../components/shared/AuthLink/AuthLink';
import createAccountValidationSchema from '../form-validation/CreateAccountValidationSchema';
import CreateAccountFormModel from '../models/form-models/CreateAccountFormModel';
import { registerUser } from '../services/UserService';
import { useNavigate } from 'react-router-dom';
import ApiError from '../utils/error-handling/ApiError';
import { Bounce, toast, ToastContainer } from 'react-toastify';

const CreateAccountPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, /*setError*/ } = useForm<CreateAccountFormModel>({
    resolver: yupResolver(createAccountValidationSchema),
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<CreateAccountFormModel> = async (formData: CreateAccountFormModel) => {
    const result : null | ApiError = await registerUser(formData);
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
      toast.success(`Account ${formData.username} was successfully created!`, {
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
      navigate('/login');
    }
  };

  return (
    <>
      <Container
        maxWidth={false}  //Allows the Container to expand to full width
        sx={{
          height: '100vh',  //Force full height to match the viewport
          width: '100vw',   //Force full width to match the viewport
          display: 'flex',
          backgroundColor: '#f5f5f5',
          padding: 4
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
            Create an Account
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
            <FormInput
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              register={register}
              error={errors.confirmPassword}
            />
            <SubmitButton style={{ marginTop: 16 }}> 
              Register 
            </SubmitButton>
          </form>
          <AuthLink 
            questionText="Already have an account?" 
            linkText="Sign in" 
            linkTo="/login" 
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
  ); //end return
}; //end CreateAccountPage

export default CreateAccountPage;