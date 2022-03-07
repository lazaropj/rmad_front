import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Button, FormGroup, Label } from 'reactstrap';
import { Input } from 'src/components';
import { api } from 'src/services';
import { emailRegExp } from 'src/validators/email';

import * as Style from './styles';

type IData= {
  email: string;
  password: string;
};

type Form = {
  email: string;
  password: string;
};

export const Register: React.FC = () => {
  const methods = useForm<Form>();
  const { handleSubmit: ProviderSubmit } = methods;

  const handleSubmit: SubmitHandler<Form> = async ({ email, password }) => {
    const config: IData = {
      email: email,
      password: password
    }

    try {
      await api.post('/user/new', config, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        console.log(response);
        if(response.status === 200) {
          alert('Usuário registrado com sucesso');
        }
      });
    } catch (error) {
      console.error('Erro CreateTravel', error);
    }
  };
  return (
    <Style.Container>
      <h1>Register</h1>
      <form
        onSubmit={ProviderSubmit(handleSubmit, error =>
          console.log(error),
        )}
      >
        <FormProvider {...methods}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              className="form-control"
              id="email"
              name="email"
              placeholder="Login"
              type="email"
              controller={{
                rules: {
                  pattern: {
                    value: emailRegExp,
                    message: 'Email inválido',
                  },
                },
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              className="form-control"
              id="password"
              name="password"
              placeholder="Senha"
              type="password"
              controller={{
                rules: {
                  minLength: {
                    value: 6,
                    message: 'No minimo 6 caractes',
                  },
                },
              }}
            />
          </FormGroup>
          <Button type="submit">entrar</Button>
        </FormProvider>
      </form>
    </Style.Container>
  )
}
