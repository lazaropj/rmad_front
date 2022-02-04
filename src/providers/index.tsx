import React from 'react';

import { ThemeProvider } from './custom';

import { MobileProvider, ModalProvider } from './hooks/context';

export const RootProvider: React.FC = ({ children }) => {
  const providers = [MobileProvider, ThemeProvider, ModalProvider];
  return (
    <>
      {providers.reduce(
        (Acc, Provider) => (
          <Provider>{Acc}</Provider>
        ),
        children,
      )}
    </>
  );
};
