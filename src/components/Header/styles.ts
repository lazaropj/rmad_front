import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background: #fdbd27;

  position: fixed;
  width: 100%;
  z-index: 2;
`;

export const Menu = styled.div`
  background: #504e49;
  margin-top: 15px;

  a {
    color: ${props => props.theme.colors.white.base};
    font-size: 0.8rem;
    text-transform: uppercase;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Logo = styled.div`
  margin-bottom: 15px;
  width: 60px;
  height: 40px;
`;