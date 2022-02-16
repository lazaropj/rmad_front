import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from 'src/providers/hooks/context';

export const PrivateRoute: React.FC = () => {
  const { token } = useAuth();

  useEffect(() => {
    if (token) {
      console.log('entrouaqui');
    }
  }, [token]);

  return token ? <Outlet /> : <Navigate to="/" />;
};
