import React from 'react';
import { Outlet } from 'react-router-dom';
import Blog from '../pages/Blog/Loadable';
import Home from '../pages/Home/Loadable';

const UserRoutes = {
  path: '/',
  title: 'Teja Chundru',
  element: <Outlet />,
  children: [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: 'blog',
      element: <Blog />,
    },
  ],
};

export default UserRoutes;
