import React from 'react';
import * as Styles from './styles';
import { dateFormat } from 'src/utils/dateFormat';

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
          <p onClick={handleCloseDetails}>X</p>
        </Styles.Header>
          {travelSelected.map((travel) => {
            return(
              <Styles.TableHeader key={travel.ID}>
                <span>Code: <strong>{travel.code} </strong></span>
                <span>ID do Usuário: <strong>{travel.user_id}</strong></span>
                <h2>{travel.route}</h2>
                <div key={travel.ID}>
                  <p><strong>Título:</strong>{travel.title}</p>
                  <p><strong>Descrição:</strong> {travel.description}</p>
                  <p>Partida: <strong> {dateFormat(travel.start_date)}</strong></p>
                  <p>Chegada: <strong> {dateFormat(travel.finish_date)}</strong></p>
                  <p>Criado em: <strong> {dateFormat(travel.CreatedAt)}</strong></p>
                  <p>Atualizando em: <strong> {travel.UpdatedAt ? dateFormat(travel.UpdatedAt) : 'indisponível'}</strong></p>
                  <p>Deletado em: <strong> {travel.DeletedAt ? dateFormat(travel.DeletedAt) : 'indisponível'}</strong></p>
                  <p>ID da Rota: <strong> {travel.ID}</strong></p>
                </div>
              </Styles.TableHeader>
            )
          })
          }
      </Styles.Container>
  )
};