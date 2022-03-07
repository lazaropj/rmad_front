import React from 'react';
import {
  BrowserRouter,
  Routes as Switch,
  Route,
  Outlet,
} from 'react-router-dom';

import * as Page from 'src/pages';
import { PrivateRoute } from './route';

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Page.Home />} />
        <Route path="/login" element={<Page.SignInPage />} />
        <Route path="/register" element={<Page.Register />} />
        <Route path="/" element={<Outlet />}>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="travels" element={<Page.MyTravels />} />
            <Route path="new-travel" element={<Page.CreateTravel />} />
          </Route>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
