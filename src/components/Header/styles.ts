import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Menu = styled.div`
  border-bottom: 2px solid #514617;
  background: #514617;
  border-radius: 35px;
  margin-top: 15px;

  a {
    color: ${props => props.theme.colors.white.base};
    font-size: 0.8rem;
  }
`;

export const Logo = styled.div`
  margin-top: 15px;
  width: 60px;
  height: 40px;
`;