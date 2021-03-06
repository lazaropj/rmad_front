import React, { useEffect, useState } from 'react';
import { Alert, Button, ButtonGroup, Collapse } from 'reactstrap';
import { dateFormat } from 'src/utils/dateFormat';
import { api } from 'src/services';

import * as Style from './styles';
import { TravelDetails } from '../TravelDetails';
import { useModal } from 'src/providers/hooks/context';

export type Travel = {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string;
  title: string;
  description: string;
  route: string;
  start_date: string;
  finish_date: string | null;
  code: string;
  user_id: number;
};

type AlertProps = {
  message?: string;
  state: boolean;
  color?: string;
}

type PositionCardProps = {
  top: number;
  left: number;
}

export const MyTravels: React.FC = () => {
  const [travels, setTravels] = useState<Travel[]>([]);
  const [trajectory, setTrajectory] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [vote, setVote] = useState<number>(0);
  const [code, setCode] = useState<string>('');
  const [travelId, setTravelId] = useState<number>(0);
 // const [position, setPosition] = useState<number>(0);
  const [position, setPosition] = useState<PositionCardProps>({top: 0, left: 0});
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [isOpenAlert, setIsOpenAlert] = useState<AlertProps>({state: false, message: '', color: ''});
  
  const { toggleModal, modal } = useModal();

  const changeTrajectory = (value: number) => {
    setTrajectory(value);
  }

  const addVote = (value:number) => {
    setVote(value);
  }

  const sendVote = async (code: string) => {
    setIsOpen(!isOpen); 
    setCode(code)
    if (isOpen) {
      const config = {
        vote: vote,
        code: code,
      }

      if(vote === 0) {
        setIsOpenAlert({state: true, message:'Você não votou ainda', color: 'danger'})
        setTimeout(() => {
          setIsOpenAlert({state: false, color: 'danger'});
        }, 2000);
        return;
      } else {
        const tokenLocal = localStorage.getItem('@rmad::token');
        try {
          await api.post('/travel/vote', config, {
            method: 'post',
            headers: { 
              'Authorization': `Bearer ${tokenLocal}`,
              'Content-Type': 'application/json'
            },
          }).then((response) => {
            console.log(response);
            if(response.status === 200) {
              setIsOpenAlert({state: true, message:'Você votou com sucesso', color: 'success'});
              setTimeout(() => {
                setIsOpenAlert({state: false});
              }, 2000);
            }
          });
        } catch (error) {
          console.error('Erro CreateTravel', error);
        }
      }
      setVote(0);
    }
  }

  const handleCloseDetails = () => {
    setTravelId(0);
    setPosition({top: 0, left: 0});
    toggleModal({
      details: {
        isOpen: false,
      },
    });
  }

  const handleDetails = (travelId: number, position: any)  => {
    setTravelId(travelId);
    setPosition(position);
    console.log(position);
    toggleModal({
      details: {
        isOpen: true,
      },
    });
  };

  useEffect(() => {
    if(position.top === 0 || travelId === 0) {
      handleCloseDetails();
      return
    }

    handleDetails(travelId, position);
  }, [position.top, travelId]);

  useEffect(() => {
    setVote(vote)
  }, [vote]);

  useEffect(() => {
    const getTravels = async () => {
      const tokenLocal = localStorage.getItem('@rmad::token');
      try {
        await api.get('/travel', {
          headers: { 'Authorization': `Bearer ${tokenLocal}` },
        }).then((response) => {
          const myTravels = response.data.data.map((item: Travel) => item);
          myTravels.sort((a: any, b: any) => {
            a = new Date(a.start_date);
            b = new Date(b.start_date);
            return b - a;
          });

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
    <Style.Container>
      {modal?.details?.isOpen && <TravelDetails height={height} width={width} handleCloseDetails={handleCloseDetails} position={position} travels={travels} ID={travelId} />}
      <Style.TextHeader><p>Bem vindo! Escolha "Detalhar" para acessar as informações completas ou em "Avaliar" para atribuir notas aos tragetos cadastrados.</p></Style.TextHeader>
      {
        travels.map((item: Travel) => (
          <Style.CardContainer key={item.code}>
          {
            <Alert fade={true} color={isOpenAlert.color} isOpen={isOpenAlert.state && item.code === code} dismissible>
              {isOpenAlert.message}
            </Alert>
          }
            <Style.CardHeader  >
              <Style.ButtonAction>
                <Button
                  onClick={() => sendVote(item.code)}
                >
                  {isOpen && item.code === code  ? 'Enviar' : 'Avaliar'}
                </Button>
              </Style.ButtonAction>
                <Collapse
                  style={{
                    display: isOpen && item.code === code ? 'block' : 'none',
                  }}
                >
                  <h2>Qual nota você dá para esse trajeto?</h2>
                  <ButtonGroup>{
                    Array.from({ length: 9 }).map((item, index) => (
                      <Button
                        value={index +1}
                        key={index}
                        color="primary"
                        onClick={() => {addVote(index +1)}}
                      
                      ><span>{index + 1}</span></Button>
                    ))}
                  </ButtonGroup>
              </Collapse>
            </Style.CardHeader>
            <Style.CardBody>
              <span>Rota: {item.route}</span>
              <Style.Intinerary>
                  <Style.Date>
                    <span>{dateFormat(item.start_date)}</span>
                    <span>Partida</span>
                  </Style.Date>
                  <Style.Level trajectory={trajectory}>
                    <div />
                  </Style.Level>
                  <Style.Date>
                    <span>{dateFormat(item.finish_date)}</span>
                    <span>Chegada</span>
                  </Style.Date>
                </Style.Intinerary>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Style.CardBody>
            <Style.CardFooter>
              <Style.Avatar>
                <img src="https://via.placeholder.com/17x17" alt="Avatar" />
                <span>Name {item.code}</span>
              </Style.Avatar>
              <Style.Details>
                <Button onClick={(e: any) => {
                  setPosition({
                    top: parseInt(e.target.parentNode.parentNode.parentNode.offsetTop),
                    left: parseInt(e.target.parentNode.parentNode.parentNode.offsetLeft),
                  });
                  setTravelId(item.ID);
                  setWidth(parseInt(e.target.parentNode.parentNode.parentNode.offsetWidth));
                  setHeight(parseInt(e.target.parentNode.parentNode.parentNode.offsetHeight));
                }}>Detalhar</Button>
              </Style.Details>
            </Style.CardFooter>
          </Style.CardContainer>
        ))
      }
    </Style.Container>
  );
};
