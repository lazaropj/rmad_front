import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  justify-content: center;

  position: absolute;
  bottom: 0;

  width: 100%;
  background: ${props => props.theme.colors.primary};
  border-top: 1px solid #f4870a;

  position: fixed;
  z-index: 2;

  span {
    font-size: 0.6rem;
  }
`;