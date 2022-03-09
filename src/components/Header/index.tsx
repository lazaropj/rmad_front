import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import * as Style from './styles';

export const Header: React.FC = () => {
  return (
    <Style.Container>
        <Style.Logo>
          <img alt="Logo" src="https://via.placeholder.com/60x40" />
        </Style.Logo>
        <Style.Menu>
        <Nav>
          <NavItem>
            <NavLink href="/home">
              Home
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