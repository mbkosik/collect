import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ROUTES } from './config/Routes';

const router = createBrowserRouter(ROUTES, {
  basename: import.meta.env.VITE_BASE_URL,
});

// TODO: implement protected routes
export const App = () => <RouterProvider router={router} />;
