import React, { createContext, useContext, useMemo, useState } from 'react';
import { api } from 'src/services';

export type User = {
  email: string;
  password: string;
};

type SignInParams = {
  email: string;
  password: string;
};

type Context = {
  user: User;
  token: string;
  SignIn(data: SignInParams): Promise<void>;
};

const AuthContext = createContext<Context>({} as Context);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>(() => {
    const userLocal = localStorage.getItem('@rmad::user');
    if (userLocal) {
      return JSON.parse(userLocal);
    }

    return {} as User;
  });

  const [token, setToken] = useState<string>(() => {
    const tokenLocal = localStorage.getItem('@rmad::token');
    if (tokenLocal) {
      api.defaults.headers.common.Authorization = tokenLocal;
      return tokenLocal;
    }

    return '';
  });

  const SignIn = async (data: SignInParams) => {
    console.log('entrei no signin', `dado: ####${data.email}`);
    api.post('/api/user/login', data);
  };

  const value = useMemo(() => ({ user, SignIn, token }), [user, token]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): Context => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
