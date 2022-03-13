import styled from 'styled-components';

export const Container = styled.div`
  .react-calendar {
    background: ${props => props.theme.colors.primary};
    border-radius: 7px;
    margin-bottom: 9px;
    border: none;
  }

  .react-datetime-picker__wrapper {
    border: 2px solid #514617;
    border-radius: 30px;
    padding: 15px;
  }

  .react-calendar__tile--active {
    background: #514617;
    color: white;
    border-radius: 7px;
  }

  .react-datetime-picker__button:enabled:hover .react-datetime-picker__button__icon, .react-datetime-picker__button:enabled:focus .react-datetime-picker__button__icon {
    stroke: ${props => props.theme.colors.primary};
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  width: 80%
  margin: 0 auto;
  margin: 35px 0 15px 0;

  h3 {
    text-align: center;
    font-size: 1rem;
  }
`;

export const FormContainer = styled.div`
  color: ${({ theme }) => theme.colors.white};
`;

export const InputsContainer = styled.div`
    input {
    border-radius: 50px;
    overflow: hidden;
    background: #514617;
    color: ${({ theme }) => theme.colors.white.base};
    font-size: 0.8rem;
    padding: 0 30px;

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
    font-size: 0.8rem;
  }

  label {
    padding: 30px;
    font-size: 0.8rem;
  }
`;

export const DatePickerContainer = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 0.8rem;
  }
`;

export const ButtonContainer = styled.div`
    button {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.black[100]};
    width: 100%;
    border: 2px solid ${({ theme }) => theme.colors.black[100]};

    margin-top: 30px;

    &:hover {
      background: ${({ theme }) => theme.colors.black[100]};
      color: ${({ theme }) => theme.colors.white.base};
    }
  }
`;
