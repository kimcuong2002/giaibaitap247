import { FC } from 'react';

import { Navigate, useRoutes } from 'react-router-dom';

import LayoutComponent from '../layout';
import HomePage from '../pages/home-page/home';
import NotFound from '../pages/not-found';
import { Profile } from '@/components';
import QuestionDetail from '@/pages/question';

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
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/code',
        element: <QuestionDetail />,
      },
    ],
  },
];

const RenderRouter: FC = () => {
  const element = useRoutes(routes);

  return element;
};

export default RenderRouter;
