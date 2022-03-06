import React, { useContext, useState } from 'react';
import * as Styles from './styles';

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
}

export const TravelDetails: React.FC<Travel> = ({travels, ID}) => {
  console.log('travels details', travels)
  console.log('travels details id', ID)

  const travelSelected = travels.filter((travel) => travel.ID === ID);

  return(
      <Styles.Container>
        <h1>Travels Details</h1>
        <ul>
          {travelSelected.map((travel) => {
            return(
              <>
                <li key={travel.ID}><p>Título: <strong>{travel.title}</strong></p></li>
                <li><p>Description: <strong>{travel.description}</strong></p></li>
                <li><p>Rota: <strong>{travel.route}</strong></p></li>
                <li><p>Data de ínicio: <strong>{travel.start_date}</strong></p></li>
                <li><p>Data de termino: <strong>{travel.finish_date}</strong></p></li>
                <li><p>Code: <strong>{travel.code}</strong></p></li>
                <li><p>ID do Usuário: <strong>{travel.user_id}</strong></p></li>
                <li><p>Criado em: <strong>{travel.CreatedAt}</strong></p></li>
                <li><p>Atualizando em: <strong>{travel.UpdatedAt}</strong></p></li>
                <li><p>Deletado em <span>{travel.DeletedAt}</span></p></li>
                <li><p>ID da Rota<strong>{travel.ID}</strong></p></li>
              </>
            )
          })
          }
        </ul>
      </Styles.Container>
  )
};