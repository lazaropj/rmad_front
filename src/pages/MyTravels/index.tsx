import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Card, CardBody, Collapse } from 'reactstrap';
import { api } from 'src/services';
import * as Style from './styles';

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
  const [trajectory, setTrajectory] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [vote, setVote] = useState<Number>(0);

  const changeTrajectory = (value: number) => {
    setTrajectory(value);
  }
  
  const addVote = (value:number) => {
    setVote(value);
  }

  const sendVote = async (code: any) => {
    setIsOpen(!isOpen); 
    if (isOpen) {
      const config = {
        vote: vote,
        code: code,
      }

      if(vote === 0) {
        alert('Você não avaliou o trajeto');
        return;
      }else {
        const tokenLocal = localStorage.getItem('@rmad::token');
        try {
          await api.post('/travel/vote', config, {
            method: 'post',
            headers: { 
              'Authorization': `Bearer ${tokenLocal}`,
              'Content-Type': 'application/json'
            },
          }).then((response) => {
            if(response.status === 200) {
              alert('Voto adicionado com sucesso');
            }
          });
        } catch (error) {
          console.error('Erro CreateTravel', error);
        }
      }
    }
  }

  useEffect(() => {
    setVote(vote)
    console.log('addVote', vote);
  }, [vote]);

  useEffect(() => {
    const getTravels = async () => {
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
    getTravels();
    changeTrajectory(50)
  }, []);

  return (
    <div>
      {
        travels.map((item: Travel) => (
          <Style.Container key={item.code}>
            <Style.CardHeader>
              <Style.ButtonAction>
                <Button
                  color="primary"
                  onClick={() => sendVote(item.code)}
                >
                  {isOpen ? 'Enviar' : 'Avaliar'}
                </Button>
              </Style.ButtonAction>
              <Collapse
                style={{
                  display: isOpen ? 'block' : 'none',
                }}
              >
                <Card>
                  <CardBody>
                    <ButtonGroup>{
                      Array.from({ length: 10 }).map((item, index) => (
                        <Button
                          value={index +1}
                          key={index}
                          color="primary"
                          onClick={() => {addVote(index +1)}}
                        
                        >{index + 1}</Button>
                      ))}
                    </ButtonGroup>
                  </CardBody>
                </Card>
              </Collapse>
              <Style.Intinerary>
                <Style.Date>
                  <span>10h35</span>
                  <span>Partida</span>
                </Style.Date>
                <Style.Level trajectory={trajectory}>
                  <div />
                </Style.Level>
                <Style.Date>
                  <span>11h05</span>
                  <span>Chegada</span>
                </Style.Date>
              </Style.Intinerary>
              <Style.Flag>
                <span>Code: {item.code === '' && 'indisponível'}</span>
              </Style.Flag>
            </Style.CardHeader>
            <Style.CardBody>
              <span>Rota: {item.route}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Style.CardBody>
            <Style.CardFooter>
              <Style.Avatar>
                <img src="https://via.placeholder.com/17x17" alt="Avatar" />
              </Style.Avatar>
              <span>Name {item.code}</span>
            </Style.CardFooter>
          </Style.Container>
        ))
      }
    </div>
  );
};
