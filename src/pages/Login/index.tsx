import {
  Button,
  TextInput,
  PasswordInput,
  Container,
  Stack,
  Title,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import {
  IconExclamationCircle,
  IconLock,
  IconMail,
} from '@tabler/icons-react';
import { notifications } from '@mantine/notifications';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import isEmail from 'validator/lib/isEmail';
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
      email: value => (isEmail(value) ? null : 'Invalid email'),
    },
  });

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
    onError: err => {
      // TODO: display message from error object in notification
      console.log(err);
      notifications.show({
        title: 'Error!',
        message: 'Something went wrong',
        withCloseButton: true,
        color: 'red',
        icon: <IconExclamationCircle />,
      });
    },
  });

  const submitForm = form.onSubmit(values => handleLogin.mutate(values));

  // TODO: logout button in sidebar menu
  return (
    <Container
      h="100%"
      size="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
      <Title order={1} align="center">
        Collect
      </Title>
      <form onSubmit={submitForm}>
        <Stack spacing="sm" justify="center">
          <TextInput
            withAsterisk
            label="Email"
            placeholder="your@email.com"
            icon={<IconMail />}
            {...form.getInputProps('email')}
          />
          <PasswordInput
            withAsterisk
            label="Password"
            placeholder="****"
            icon={<IconLock />}
            {...form.getInputProps('password')}
          />
          <Button mt="md" w="40%" m="0 auto" type="submit">
            Login
          </Button>
        </Stack>
      </form>
    </Container>
  );
};
