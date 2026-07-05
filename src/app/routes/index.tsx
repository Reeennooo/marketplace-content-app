import {Route, Routes} from 'react-router-dom';
import {ProtectedRoute} from './ProtectedRoute.tsx';
import type {ReactElement} from 'react';
import {Home} from 'pages/Home.tsx';
import NotFound from 'pages/NotFound.tsx';
import {Registration} from 'pages/Registration.tsx';
import {RoutePaths} from 'shared/types/routes.ts';

const isRegistered= true;

export const RoutesList = (): ReactElement => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute
            isRegistered={isRegistered}>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
      <Route path={RoutePaths.registration} element={<Registration />} />
    </Routes>
  );
};
