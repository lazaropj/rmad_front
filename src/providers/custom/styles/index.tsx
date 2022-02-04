import React from 'react';
import { ThemeProvider as Provider } from 'styled-components';
import theme from './theme';

export const ThemeProvider: React.FC = ({ children }) => {
  return <Provider theme={theme}>{children}</Provider>;
};
