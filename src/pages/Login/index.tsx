import { Button, TextInput, PasswordInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { useAuth } from '@/store/auth-store';
import { login, ILoginData } from '@/services/auth';

export const Login = () => {
  const { dispatch } = useAuth();
  const navigate = useNavigate();

  const form = useForm<ILoginData>({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      // TODO: use validator lib to test email value
      email: value => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  // TODO: do you need to pass a data prop, maybe i can use form.values state?
  const handleLogin = useMutation((data: ILoginData) => login(data), {
    onSuccess: res => {
      navigate('/home');

      dispatch({
        type: 'setAuthData',
        payload: {
          token: res?.data?.localId ?? '',
          name: res?.data?.email ?? '',
        },
      });
    },
    // onError: err => {
    //   // TODO: display error notification;
    // },
  });

  const submitForm = form.onSubmit(values => handleLogin.mutate(values));

  // TODO: logout button in sidebar menu
  // TODO: add style for Login Page
  return (
    <form onSubmit={submitForm}>
      {/* TODO: check TextInput and PasswordInput docs for what you can use here */}
      <TextInput
        withAsterisk
        label="Email"
        placeholder="your@email.com"
        {...form.getInputProps('email')}
      />
      <PasswordInput
        withAsterisk
        label="Password"
        placeholder="****"
        {...form.getInputProps('password')}
      />
      <Button type="submit">Login</Button>
    </form>
  );
};
