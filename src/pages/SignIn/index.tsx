import React from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import {
  Button,
  Col,
  Container,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';
import { useAuth } from 'src/providers/hooks/context/auth';
import { emailRegExp } from 'src/validators/email';

import * as S from './styles';

type Form = {
  email: string;
  password: string;
};

export const SignInPage: React.FC = () => {
  const { SignIn } = useAuth();

  const methods = useForm<Form>();
  const { handleSubmit: ProviderSubmit } = methods;

  const handleSubmit: SubmitHandler<Form> = async ({ email, password }) => {
    try {
      await SignIn({
        email,
        password,
      });
    } catch (error) {
      console.error(error);
      console.log('entrei no erro');
      // alert('Error');
    }
  };
  return (
    <Container>
      <Row>
        <Col className="px-0">
          <S.Container>
            <S.Header>
              <S.Logo>
                <img alt="Logo" src="https://via.placeholder.com/176x72" />
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
              <a href="/">Não tem cadastro?</a>
            </S.Main>
          </S.Container>
        </Col>
      </Row>
    </Container>
  );
};
