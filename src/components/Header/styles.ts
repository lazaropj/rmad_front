import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background: #fdbd27;

  border-bottom: 2px solid #f4870a;
  -webkit-box-shadow: 0px 10px 15px -2px rgb(0 0 0 / 32%);
  box-shadow: 0px 10px 15px -2px rgb(0 0 0 / 32%);

  width: 100%;
  z-index: 2;
`;

export const Menu = styled.div`
  background: #504e49;
  margin-top: 15px;
  padding: 0 16px;

  a {
    color: ${props => props.theme.colors.white.base};
    font-size: 0.8rem;
    text-transform: uppercase;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 768px) {
      justify-content: end;
    }
  }
`;

export const Logo = styled.div`
  margin-bottom: 15px;
  width: 60px;
  height: 40px;
`;