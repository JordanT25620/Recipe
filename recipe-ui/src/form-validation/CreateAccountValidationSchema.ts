import * as yup from 'yup';
import config from '../config/Config';

const createAccountValidationSchema = yup.object().shape({
    username: yup.string()
        .min(config.fieldRequirements.username.minLength, `Username must be at least ${config.fieldRequirements.username.minLength} characters`)
        .max(config.fieldRequirements.username.maxLength, `Username cannot exceed ${config.fieldRequirements.username.maxLength} characters`)
        .required('Username is required'),
    password: yup.string()
        .min(config.fieldRequirements.password.minLength, `Password must be at least ${config.fieldRequirements.password.minLength} characters`)
        .max(config.fieldRequirements.password.maxLength, `Password cannot exceed ${config.fieldRequirements.password.maxLength} characters`)
        .required('Password is required'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password')], 'Passwords must match')
        .required('Confirm Password is required'),
});

export default createAccountValidationSchema;