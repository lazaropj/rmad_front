import React from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button, Col, Container, FormGroup, Label, Row } from 'reactstrap';
import { Input } from 'src/components';
import { useAuth } from 'src/providers/hooks/context/auth';
import { emailRegExp } from 'src/validators/email';
import logo from 'src/assets/images/svg/logo.svg';

import * as S from './styles';

type Form = {
  email: string;
  password: string;
};

export const SignInPage: React.FC = () => {
  const { SignIn } = useAuth();
  const navigate = useNavigate();

  const methods = useForm<Form>();
  const { handleSubmit: ProviderSubmit } = methods;

  const handleSubmit: SubmitHandler<Form> = async ({ email, password }) => {
    try {
      await SignIn({
        email,
        password,
      });

      const tokenLocal = localStorage.getItem('@rmad::token');
      if (tokenLocal) {
        navigate('/travels');
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Row>
      <Col className="px-0">
        <S.Container>
          <S.Header>
            <S.Logo>
              <img alt="Logo" src={logo} />
            </S.Logo>
            <p>Informe seu login e senha para acessar a aplicação</p>
          </S.Header>
          <S.Main>
            <S.FormContainer>
              <form
                onSubmit={ProviderSubmit(handleSubmit, error =>
                  console.log(error),
                )}
              >
                <FormProvider {...methods}>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                      className="form-control"
                      id="exampleEmail"
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
                    <Label for="examplePassword">Password</Label>
                    <Input
                      className="form-control"
                      id="examplePassword"
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
            </S.FormContainer>
            <a href="/">Esqueci minha senha</a>
            <a href="/register">Não tem cadastro?</a>
          </S.Main>
        </S.Container>
      </Col>
    </Row>
  );
};
