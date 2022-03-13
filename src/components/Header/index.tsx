import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import * as Style from './styles';
import logo from 'src/assets/images/svg/logo-black.svg';

export const Header: React.FC = () => {
  return (
    <Style.Container>
        <Style.Logo>
          <img alt="Logo" src={logo} />
        </Style.Logo>
        <Style.Menu>
        <Nav>
          <NavItem>
            <NavLink href="/home">
              Dasboard
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/travels">
              Travels
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink active href="/new-travel">
              Novo  Trajeto
            </NavLink>
          </NavItem>
        </Nav>
        </Style.Menu>

    </Style.Container>
  );
};