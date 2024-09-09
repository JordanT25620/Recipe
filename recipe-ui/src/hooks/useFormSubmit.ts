import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormModel from '../models/form-models/FormModel';
import { AnyObjectSchema } from 'yup';

export const useFormSubmit = <T extends FormModel>(validationSchema : AnyObjectSchema) => {
  const { register, handleSubmit, formState: { errors } } = useForm<T>({
    resolver: yupResolver(validationSchema),
  });

  return { register, handleSubmit, errors };
};