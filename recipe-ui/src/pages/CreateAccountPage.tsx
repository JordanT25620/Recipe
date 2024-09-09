import { Container, Typography, Box } from '@mui/material';
import FormInput from '../components/shared/FormInput/FormInput';
import SubmitButton from '../components/shared/SubmitButton/SubmitButton';
import { SubmitHandler } from 'react-hook-form';
import AuthLink from '../components/shared/AuthLink/AuthLink';
import createAccountValidationSchema from '../form-validation/CreateAccountValidationSchema';
import CreateAccountFormModel from '../models/form-models/CreateAccountFormModel';
import { registerUser } from '../services/UserService';
import { useNavigate } from 'react-router-dom';
import ApiError from '../utils/error-handling/ApiError';
import {toast} from 'react-toastify';
import CustomToastContainer from '../components/shared/CustomToastContainer/CustomToastContainer';
import { showToast } from '../utils/toasts/showToast';
import { useFormSubmit } from '../hooks/useFormSubmit';

const CreateAccountPage: React.FC = () => {

  //Hooks
  const { register, handleSubmit, errors, /*setError*/ } = useFormSubmit<CreateAccountFormModel>(createAccountValidationSchema);
  const navigate = useNavigate();

  //Form submission logic
  const onSubmit: SubmitHandler<CreateAccountFormModel> = async (formData: CreateAccountFormModel) => {
    const result : null | ApiError = await registerUser(formData);
    toast.dismiss();
    if (result instanceof ApiError) {
      const apiError : ApiError = result;
      showToast(apiError.message, "info");
      //setError('username', { type: 'manual', message: 'Invalid username or password' });
    } else {
      showToast(`Account ${formData.username} was successfully created!`, "success");
      navigate('/login');
    }
  };

  //Component
  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          height: '100vh',
          width: '100vw',
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
      <CustomToastContainer/>
    </>
  ); //end return
}; //end CreateAccountPage

export default CreateAccountPage;