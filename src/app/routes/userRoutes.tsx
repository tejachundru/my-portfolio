import React from 'react';
import { Outlet } from 'react-router-dom';
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
  ],
};

export default UserRoutes;
