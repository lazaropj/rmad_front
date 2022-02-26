import React from 'react';
import { useTravel } from 'src/providers/hooks/context/travels';
import * as S from './styles';

export const MyTravels: React.FC = () => {
  const { travels } = useTravel();

  console.log('Page my travels', travels);

  return (
    <div>
      <S.Container>
        <S.CardHeader>
          <S.ButtonAction>
            <span>Btn</span>
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
    </div>
  );
};
