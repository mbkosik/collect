import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from './pages/Login';
import { Collect } from './pages/Collect';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/home',
      element: <Collect />,
    },
    // TODO: prepare NotFoundPage
    {
      path: '*',
      element: <div>Not found</div>,
    },
  ],
  {
    basename: import.meta.env.VITE_BASE_URL,
  },
);

export const App = () => <RouterProvider router={router} />;
