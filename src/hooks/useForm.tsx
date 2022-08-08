import { useState } from 'react';

interface Props<T> {
  formInput: T;
}

export const useForm = <T,>(props: Props<T>) => {
  const { formInput } = props;
  const [form, setForm] = useState<T>(formInput);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return { form, onInputChange };
};
