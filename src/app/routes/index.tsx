import {Route, Routes} from 'react-router-dom';
import {ProtectedRoute} from './ProtectedRoute.tsx';
import type {ReactElement} from 'react';
import {Home} from 'pages/Home.tsx';
import NotFound from 'pages/NotFound.tsx';
import {RoutePaths} from 'shared/types/routes.ts';
import {DashboardLayout} from 'shared/ui/DashboardLayout/DashboardLayout.tsx';
import {DashboardHome} from 'pages/DashboardHome.tsx';

const isRegistered= true;

export const RoutesList = (): ReactElement => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute isRegistered={isRegistered}>
            <Home />
          </ProtectedRoute>
        }
      />

      {/* DASHBOARD LAYOUT */}
      <Route
        path={RoutePaths.dashboard}
        element={
          <ProtectedRoute isRegistered={isRegistered}>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardHome />} handle={{ title: 'Список карточек' }} />
        <Route path="settings" element={<div>Настройки</div>} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
