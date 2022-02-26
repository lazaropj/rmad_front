import React, { useEffect, useState } from 'react';
import { useTravel } from 'src/providers/hooks/context/travels';
import * as S from './styles';

export const MyTravels: React.FC = () => {
  const [trajectory, setTrajectory] = useState(0);
  const { travels } = useTravel();

  const changeTrajectory = (value: number) => {
    setTrajectory(value);
  }

  useEffect(() => {
    changeTrajectory(50)
  }, [trajectory]);

  return (
    <div>
      <S.Container>
        <S.CardHeader>
          <S.ButtonAction>
            <span>Btn</span>
          </S.ButtonAction>
          <S.Intinerary>
            <S.Date>
              <span>10h35</span>
              <span>Partida</span>
            </S.Date>
            <S.Level trajectory={trajectory}>
              <div />
            </S.Level>
            <S.Date>
              <span>11h05</span>
              <span>Partida</span>
            </S.Date>
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
