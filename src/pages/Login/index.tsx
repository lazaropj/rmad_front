import React from 'react';
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';

import * as S from './styles';

export const Login: React.FC = () => {
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
                <Form>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="Login"
                      type="email"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder="Senha"
                      type="password"
                    />
                  </FormGroup>
                  <Button>entrar</Button>
                </Form>
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
