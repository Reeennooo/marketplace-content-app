import {Route, Routes} from 'react-router-dom';
import {ProtectedRoute} from './ProtectedRoute.tsx';
import type {ReactElement} from 'react';
import {Home} from 'pages/Home.tsx';
import NotFound from 'pages/NotFound.tsx';
import {RoutePaths} from 'shared/types/routes.ts';
import {DashboardLayout} from 'shared/ui/DashboardLayout/DashboardLayout.tsx';
import {DashboardHome} from 'pages/DashboardHome.tsx';
import {DashboardUsers} from 'pages/DashboardUsers.tsx';
import {DashboardKids} from 'pages/DashboardKids.tsx';
import {DashboardProducts} from 'pages/DashboardProducts.tsx';

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
        <Route index element={<DashboardHome />} />
        <Route path={RoutePaths.userManagement} element={<DashboardUsers />} />
        <Route path={RoutePaths.kidsManagement} element={<DashboardKids />} />
        <Route path={RoutePaths.products} element={<DashboardProducts />} />

        DashboardProducts
        <Route path="settings" element={<div>Настройки</div>} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
