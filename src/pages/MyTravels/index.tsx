import React, { useEffect, useState } from 'react';
import { api } from 'src/services';
import * as S from './styles';

export type Travel = {
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
};

export const MyTravels: React.FC = () => {
  const [travels, setTravels] = useState<Travel[]>([]);
  useEffect(() => {
    const chamarFuncao = async () => {
      const tokenLocal = localStorage.getItem('@rmad::token');
      try {
        await api.get('/travel', {
          headers: { 'Authorization': `Bearer ${tokenLocal}` },
        }).then((response) => {
          const myTravels = response.data.data.map((item: Travel) => item);
          console.log("myTravels", myTravels);
          setTravels([...myTravels]);
        });
      } catch (error) {
        console.error('TrevelsContext', error);
      }
    };
    chamarFuncao();
  }, []);

  return (
    <div>
      {
        travels.map((item: Travel) => (
          <S.Container>
            <S.CardHeader>
              <S.ButtonAction>
                <span>{item.title}</span>
              </S.ButtonAction>
              <S.Intinerary>
                <S.In>
                  <span>10h35</span>
                  <span>Partida</span>
                </S.In>
                <S.Level>
                  <div />
                </S.Level>
                <S.In>
                  <span>11h05</span>
                  <span>Partida</span>
                </S.In>
              </S.Intinerary>
              <S.Flag>
                <span>Code: B4QdwxjMlp</span>
              </S.Flag>
            </S.CardHeader>
            <S.CardBody>
              <span>Rota: Boqueirão</span>
              <h3>Ida até a leroy comprar caixa de ferramenta</h3>
              <p>Ida até a leroy comprar caixa de ferramenta</p>
            </S.CardBody>
            <S.CardFooter>
              <S.Avatar>
                <img src="https://via.placeholder.com/17x17" alt="Avatar" />
              </S.Avatar>
              <span>Name user0298</span>
            </S.CardFooter>
          </S.Container>
        ))
      }
    </div>
  );
};
