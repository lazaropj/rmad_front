import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth, useModal } from 'src/providers/hooks/context';

export const PrivateRoute: React.FC = () => {
  const { user } = useAuth();
  const { toggleModal } = useModal();

  useEffect(() => {
    if (!user?.email) {
      console.log('entrouaqui');
      toggleModal({
        signIn: {
          isOpen: true,
        },
      });
    }
  }, [user, toggleModal]);

  return user.email ? <Outlet /> : <Navigate to="/" />;
};
