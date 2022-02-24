import React from 'react';
import { Navigate } from 'react-router-dom';
import { GET_INVOLVED_PATH, LANDING_PATH } from './constants';

const Landing = React.lazy(() => import('./pages/Landing'));
const GetInvolved = React.lazy(() => import('./pages/GetInvolved'));

const routes = [
  {
    path: LANDING_PATH,
    element: <Landing />,
  },
  {
    path: GET_INVOLVED_PATH,
    element: <GetInvolved />,
  },
  {
    path: '*',
    element: <Navigate to={LANDING_PATH} />,
  },
];

export default routes;
