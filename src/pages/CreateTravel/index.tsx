import React, { useState } from 'react';
import moment from 'moment';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button, FormGroup, Label } from 'reactstrap';
import { Input } from 'src/components';
import DateTimePicker from 'react-datetime-picker';
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
  const [value, onChange] = useState(new Date());

  const handleSubmit: SubmitHandler<TravelParams> = async ( {id, user_id, createdAt, title, description, route, start_date,  finish_date, code}, event) => {

    const config: TravelParams = {
      title: title,
      description: description,
      route: route,
      start_date: String(moment(value).format('YYYY-MM-DDTHH:mm:ssZ')),
      id: id,
      user_id: user_id,
      createdAt: createdAt,
      finish_date: finish_date,
      code: code
    }
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
            <Style.InputsContainer>
            <FormGroup>
              <Label for="title">Título</Label>
              <Input
                className="form-control"
                id="title"
                name="title"
                placeholder="O que você está planejando"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="description">Descrição</Label>
              <Input
                className="form-control"
                id="description"
                name="description"
                placeholder="Descreva qual o seu plano"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="route">Rota</Label>
              <Input
                className="form-control"
                id="route"
                name="route"
                placeholder="Qual será a rota?"
                type="text"
              />
            </FormGroup>
            </Style.InputsContainer>
            <Style.DatePickerContainer>
              <Label>Quando</Label>
              <DateTimePicker calendarClassName="react-datetime-custom" locale="pt-BR" secondAriaLabel="teste" amPmAriaLabel="pm" onChange={onChange} value={value} />
            </Style.DatePickerContainer>
            <Style.ButtonContainer>
              <Button type="submit" onClick={() => console.log(value)}>Criar rota</Button>
            </Style.ButtonContainer>
          </FormProvider>
        </form>
      </Style.FormContainer>
    </Style.Container>
  )
};
