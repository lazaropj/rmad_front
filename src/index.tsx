import React from 'react';
import ReactDOM from 'react-dom';
import { RootProvider } from 'src/providers';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <RootProvider>
      <App />
    </RootProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
