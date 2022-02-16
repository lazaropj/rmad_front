import React from 'react';
import {
  BrowserRouter,
  Routes as Switch,
  Route,
  Outlet,
} from 'react-router-dom';

import * as P from 'src/pages';
import { PrivateRoute } from './route';

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<P.Home />} />
        <Route path="/cadastro" element={<P.SignInPage />} />

        <Route path="/" element={<Outlet />}>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="area-logada" element={<P.AreaLogada />} />
          </Route>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
