import moment from 'moment';
import React from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button, FormGroup, Label } from 'reactstrap';
import { Input } from 'src/components';
import { api } from 'src/services';
import * as Style from './styles';

type TravelParams = {
  id?: number,
  user_id?: string,
  createdAt?: string,
  title: string;
  description: string;
  route: string;
  start_date: string;
  finish_date?: string;
  code?: string;
};

export const CreateTravel: React.FC = () => {
  const methods = useForm<TravelParams>();
  const navigate = useNavigate();
  const { handleSubmit: ProviderSubmit } = methods;

  const handleSubmit: SubmitHandler<TravelParams> = async ( {id, user_id, createdAt, title, description, route, start_date,  finish_date, code}, event) => {

    console.log('Dados que vieram do inputs', start_date);

    const config: TravelParams = {
      title: title,
      description: description,
      route: route,
      start_date: String(moment(start_date).format('YYYY-MM-DDTHH:mm:ssZ')),
      id: id,
      user_id: user_id,
      createdAt: createdAt,
      finish_date: finish_date,
      code: code
    }
    console.log('Dados que vieram do inputs', config.start_date);
    const tokenLocal = localStorage.getItem('@rmad::token');

    try {
      await api.post('/travel', config, {
        method: 'post',
        headers: { 
          'Authorization': `Bearer ${tokenLocal}`,
          'Content-Type': 'application/json'
        },
      }).then((response) => {
        if(response.status === 200) {
          alert('Criado com sucesso');
          navigate('/travels');
        }
      });
    } catch (error) {
      console.error('Erro CreateTravel', error);
    }
  };
  
  return(
    <Style.Container>
      <Style.Title>
      <h3>Para criar uma nova rota, por favor preencha os campos abaixo:</h3>
      </Style.Title>
      <Style.FormContainer>
        <form
          onSubmit={ProviderSubmit(handleSubmit, error =>
            console.log(error),
          )}
          >
          <FormProvider {...methods}>
            <FormGroup>
              <Label for="title">Título</Label>
              <Input
                className="form-control"
                id="title"
                name="title"
                placeholder="Diga o que você está planejando fazer"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="description">Descrição</Label>
              <Input
                className="form-control"
                id="description"
                name="description"
                placeholder="descreva o que você está planejando"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="route">Rota</Label>
              <Input
                className="form-control"
                id="route"
                name="route"
                placeholder="descreva o que você está planejando"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="start_date">Data de Início</Label>
              <Input
                className="form-control"
                id="start_date"
                name="start_date"
                placeholder="informe quando"
                type="datetime-local"
              />
            </FormGroup>
            <Button type="submit">entrar</Button>
          </FormProvider>
        </form>
      </Style.FormContainer>
    </Style.Container>
  )
};
