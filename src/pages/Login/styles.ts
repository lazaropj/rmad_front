import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
  background-color: ${({ theme }) => theme.background.color.gray100};
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  width: 198px;
  height: 187px;
  margin: 15px;

  p {
    font-weight: 500;
    font-size: 0.86rem;
    line-height: 1.2rem;

    text-align: center;
  }
`;

export const Logo = styled.div`
  width: 176px;
  height: 72px;
`;

export const Main = styled.main`
  display: flex;
  justify-content: space-between;

  flex-wrap: wrap;
  width: 312px;

  a {
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 1rem;

    text-decoration: none;

    color: #000000;

    margin: 16px 0;
  }
`;

export const FormContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;

  label {
    display: none;
  }

  form {
    width: 312px;
    height: 150px;

    button {
      width: 100%;
    }
  }
`;
