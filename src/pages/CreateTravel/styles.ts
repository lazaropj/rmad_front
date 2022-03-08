import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  width: 80%
  margin: 0 auto;
  margin-top: 70px;

  h3 {
    text-align: center;
  }
`;

export const FormContainer = styled.div`
  color: ${({ theme }) => theme.colors.white};
  input {
    border-radius: 50px;
    overflow: hidden;
    background: #514617;
    color: ${({ theme }) => theme.colors.white};

    :focus {
      background: #514617;
      color: white;

      label {
        color: ${({ theme }) => theme.colors.primary};
      }
    }

    ::placeholder {
      display: none;
    }
    &:focus + label,
    &:not(:placeholder-shown) + label {
      margin-top: 5px;
      font-size: 0.8rem;
      line-height: 1.5rem;

      top: calc(50% - 29px);
      color: white;
    }
  }

  label:first-child {
    padding: 0;
  }

  label {
    padding: 30px;
  }

  button {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.black[100]};
    width: 100%;
    border: 2px solid ${({ theme }) => theme.colors.black[100]};

    &:hover {
      background: ${({ theme }) => theme.colors.black[100]};
      color: ${({ theme }) => theme.colors.white.base};
    }
  }
`;
