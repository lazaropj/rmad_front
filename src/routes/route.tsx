import React from 'react';
import { Navigate } from 'react-router-dom';

export const PrivateRoute: React.FC = () => {
  console.log('entrouaqui');
  return <Navigate to="/" />;
};
