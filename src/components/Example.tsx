import { useForm } from 'react-hook-form';
import Input from './Input';

type FormValues = {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
};

const FormTest = () => {
  const { register } = useForm<FormValues>({ mode: 'all' });

  return <Input label="Age" type="number" {...register('age')} />;
};

export default FormTest;
