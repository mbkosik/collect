import axios from 'axios';
import { notifications } from '@mantine/notifications';
import { IconExclamationCircle } from '@tabler/icons-react';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { 'Access-Control-Allow-Origin': '*' },
});

api.interceptors.response.use(
  response => response,
  error => {
    // TODO: display message from error object in notification
    console.log(error);
    notifications.show({
      title: 'Error!',
      message: 'Something went wrong',
      withCloseButton: true,
      color: 'red',
      icon: <IconExclamationCircle />,
    });
  },
);

export const getData = () => api.get('/object.json');
