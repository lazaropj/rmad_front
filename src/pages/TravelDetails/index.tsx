import React from 'react';
import * as Styles from './styles';
import { dateFormat } from 'src/utils/dateFormat';
import { ChartDetails } from './chartDetails';

export type ITravel = {
  ID: number;
  CreatedAt: string;
  UpdatedAt?: string;
  DeletedAt?: string;
  title: string;
  description?: string;
  route?: string;
  start_date: string;
  finish_date: string | null;
  code: string;
  user_id: number;
};

interface Travel {
  travels: ITravel[];
  ID: number;
  position: {
    top: number;
    left: number;
  };
  width: number;
  height: number;
  handleCloseDetails: () => void;
}

export const TravelDetails: React.FC<Travel> = ({travels, ID, width, height, position, handleCloseDetails}) => {

  const travelSelected = travels.filter((travel) => travel.ID === ID);

  return(
      <Styles.Container height={height} width={width} position={position}>
        <Styles.Header>
          <Styles.Close onClick={handleCloseDetails} />
        </Styles.Header>
          {travelSelected.map((travel) => {
            return(
              <Styles.TableHeader key={travel.ID}>
                <h2>{travel.title}</h2>
                <div key={travel.ID}>
                  <Styles.ChartContainer>
                    <ChartDetails />
                  </Styles.ChartContainer>
                  <p><strong>Descrição: </strong> {travel.description}</p>
                  <p><strong>Rota: </strong>{travel.route}</p>
                  <p><strong>Partida: </strong> {dateFormat(travel.start_date)}</p>
                  <p><strong>Chegada: </strong> {dateFormat(travel.finish_date)}</p>
                  <p><strong>Criado em: </strong> {dateFormat(travel.CreatedAt)}</p>
                </div>
              </Styles.TableHeader>
            )
          })
          }
      </Styles.Container>
  )
};