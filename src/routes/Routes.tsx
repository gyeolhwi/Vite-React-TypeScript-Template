import { createBrowserRouter } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Login from '../pages/auth/Login';
import Home from '../pages/main/Home';
import Dashboard from '../pages/admin/Dashboard';
import Test from '../pages/test/Test';
import MainLayout from '../layouts/MainLayout';
import LoginLayout from '../layouts/LoginLayout';
import TestLayout from '../layouts/TestLayout';
import AdminLayout from '../layouts/AdminLayout';

const Routes = createBrowserRouter([
  {
    path: '',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginLayout />,
    children: [
      {
        path: '',
        element: <Login />,
      },
    ],
  },
  {
    path: '/test',
    element: <TestLayout />,
    children: [
      {
        path: '',
        element: <Test />,
      },
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        path: '',
        element: <Dashboard />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default Routes;
