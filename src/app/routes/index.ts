import type React from 'react';
import { type RouteObject, useRoutes } from 'react-router-dom';
import usePageTracking from './usePageTracking';

import UserRoutes from './userRoutes';

// eslint-disable-next-line @typescript-eslint/naming-convention
const Routes = () => {
  usePageTracking();
  return useRoutes([
    UserRoutes,
    // We can add more routes here based on the need
  ]);
};

export default Routes;
