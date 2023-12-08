import { FC } from 'react';

import { Navigate, useRoutes } from 'react-router-dom';

import LayoutComponent from '../layout';
import HomePage from '../pages/home';
import NotFound from '../pages/not-found';

const routes = [
  {
    path: '/',
    element: <LayoutComponent />,
    children: [
      {
        path: '',
        element: <Navigate to="home" />,
      },
      {
        path: '/home',
        element: <HomePage />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];

const RenderRouter: FC = () => {
  const element = useRoutes(routes);

  return element;
};

export default RenderRouter;
