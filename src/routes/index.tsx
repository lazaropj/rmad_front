import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import { HomeHeader } from 'src/components/HomeHeader';

import * as P from 'src/pages';
import { PrivateRoute } from './route';

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<P.Home />} />
        <Route path="/cadastro" element={<P.SignInPage />} />
        <Route path="/" element={<HomeHeader />}>
          <Route path="/" element={<P.Home />} />
        </Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/area-logada" element={<P.AreaLogada />} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
