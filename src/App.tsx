import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from './pages/Login';
import { Collect } from './pages/Collect';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/collect',
    element: <Collect />,
  },
  // TODO: prepare NotFoundPage
  {
    path: '*',
    element: <div>Not found</div>,
  },
]);

export const App = () => <RouterProvider router={router} />;
