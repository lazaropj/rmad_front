import React, { createContext, useContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
      return `${tokenLocal}`;
    }

    return '';
  });

  const SignIn = async (data: SignInParams) => {
    await api
      .post('/user/login', data)
      .then(response => {
        localStorage.setItem(
          '@rmad::user',
          JSON.stringify(response.data.account.email),
        );

        const { email } = response.data.account.email;
        if (email !== undefined) {
          console.log('email', email);
        }
        localStorage.setItem('@rmad::token', response.data.account.token);
        setUser(response.data.account.email);
        setToken(`Bearer ${response.data.account.token}`);
      })
      .catch(error => {
        console.log(error);
      });
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
