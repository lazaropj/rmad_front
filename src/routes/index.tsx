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
        <Route path="/login" element={<P.SignInPage />} />

        <Route path="/" element={<Outlet />}>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="travels" element={<P.MyTravels />} />
          </Route>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
