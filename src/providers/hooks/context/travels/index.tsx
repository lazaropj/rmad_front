import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { api } from 'src/services';
import { AxiosResponse } from 'axios';

type Travel = [
  {
    id?: number;
    CreatedAt: string;
    UpdatedAt?: string;
    DeletedAt?: string;
    title: string;
    description?: string;
    route?: string;
    start_date?: string;
    finish_date?: string;
    code?: string;
    user_id?: number;
  },
];

type Context = {
  travels: Travel[];
};

type Response = {
  data: Travel[];
  message: string;
  status: string;
};

const TravelContext = createContext({} as Context);

export const TravelProvider: React.FC = ({ children }) => {
  const [travels, setTravels] = useState<Travel[]>([] as Travel[]);

  const [token, setToken] = useState<string>(() => {
    const tokenLocal = localStorage.getItem('@rmad::token');

    if (tokenLocal) {
      return `${tokenLocal}`;
    }

    return '';
  });

  useEffect(() => {
    (async () => {
      try {
        const { data }: AxiosResponse<Response> = await api.get('/travel', {
          headers: {
            // eslint-disable-next-line prettier/prettier
            'Authorization': `Bearer ${token}`,
          },
        });

        const myTravels = data.data.map((item: Travel) => item);

        setTravels([...myTravels]);
      } catch (error) {
        console.error('TrevelsContext', error);
      }
    })();
  }, []);

  const value = useMemo<Context>(
    () => ({
      travels,
    }),
    [travels],
  );

  return (
    <TravelContext.Provider value={value}>{children}</TravelContext.Provider>
  );
};

export const useTravel = () => {
  const context = useContext(TravelContext);

  if (!context) {
    throw new Error('useTravel must be used with an TravelProvider');
  }

  return context;
};
