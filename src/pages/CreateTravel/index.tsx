import React, { useState } from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Alert, Button, FormGroup, Label } from 'reactstrap';
import { Input } from 'src/components';
import { api } from 'src/services';
import * as Style from './styles';

type TravelParams = {
  title: string;
  description: string;
  route: string;
  start_date: string;
};

export const CreateTravel: React.FC = () => {
  const methods = useForm<TravelParams>();
  const navigate = useNavigate();
  const [sucess, setSucess] = useState(false);
  const { handleSubmit: ProviderSubmit } = methods;

  const handleSubmit: SubmitHandler<TravelParams> = async ( {title, description, route, start_date}, event) => {

    console.log('Dados que vieram do inputs',title, description, route, start_date);
    const config: TravelParams = {
      title: title,
      description: description,
      route: route,
      start_date: '2020-01-10T12:42:31Z',
    }

    try {
      await api.post('/travel', config, {
        method: 'post',
        headers: { 
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjF9.wcUaspFuy-U4rN3cQ8KerFARodeYvhbq_kBBEO6foHM', 
          'Content-Type': 'application/json'
        },
      }).then((response) => {
        if(response.status === 200) {
          setSucess(true)
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
                type="date"
              />
            </FormGroup>
            <Button type="submit">entrar</Button>
          </FormProvider>
        </form>
      </Style.FormContainer>
    </Style.Container>
  )
};
