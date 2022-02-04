import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import * as P from 'src/pages';

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cadastro" element={<P.SignUp />} />
      </Switch>
    </BrowserRouter>
  );
};
