import { Login } from '@/pages/Login';
import { Collect } from '@/pages/Collect';
import { NotFound } from '@/pages/NotFound';

export const ROUTES = [
  {
    path: '/',
    Component: Login,
  },
  {
    path: '/home',
    Component: Collect,
  },
  {
    path: '*',
    Component: NotFound,
  },
];
