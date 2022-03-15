import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 16px;

  .react-calendar {
    border-radius: 7px;
    margin-bottom: 9px;

    border: 2px solid #514617;
    border-radius: 12px;

    -webkit-box-shadow: 0px 1px 18px -3px rgba(0,0,0,0.75); 
    box-shadow: 0px 1px 18px -3px rgba(0,0,0,0.75);

    &__tile--now {
      background: #f8f8f8;
    }
  }

  .react-calendar__navigation {
    border-bottom: 0;
    margin-top: 1em;
  }

  .react-calendar__viewContainer {
    border-top: 2px solid #514617;
  }

  .react-datetime-picker__wrapper {
    border: 2px solid #514617;
    border-radius: 30px;
    padding: 10px;
  }

  .react-calendar__tile--active {
    background: #514617;
    color: white;
    border-radius: 7px;
  }

  .react-datetime-picker__button:enabled:hover .react-datetime-picker__button__icon, .react-datetime-picker__button:enabled:focus .react-datetime-picker__button__icon {
    stroke: ${props => props.theme.colors.primary};
  }

  .react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
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
    background: #f8f8f8;
    border-color: #ffffff;
    color: ${({ theme }) => theme.colors.black[100]};
    font-size: 0.8rem;
    padding: 0 30px;
    height: 56px;

    :focus {
      background: #f8f8f8;
      color: ${({ theme }) => theme.colors.black[100]};
      border: 2px solid ${({ theme }) => theme.colors.black[100]};
      box-shadow: 0 0 0 0.3rem rgb(255 212 40);
      font-size: 1rem;
      font-weight: 400;

      label {
        color: ${({ theme }) => theme.colors.black[100]};
      }
    }

    ::placeholder {
      display: none;
    }
    &:focus + label,
    &:not(:placeholder-shown) + label {
      margin-top: 12px;
      font-size: 0.8rem;
      line-height: 1.5rem;

      top: calc(50% - 29px);
      color: ${({ theme }) => theme.colors.black[100]};
    }
  }

  label:first-child {
    padding: 0;
    font-size: 0.8rem;
    display: none;
  }

  label {
    padding: 30px;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.black[100]};
  }
`;

export const DatePickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  label {
    font-size: 0.8rem;
    text-align: center;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;

  button {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.black[100]};
    width: 100%;
    border: none;

    margin-top: 30px;

    @media (min-width: 768px) {
      width: 150px;
    }

    &:hover {
      background: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.black[100]};
    }

    &:first-child {
      background: ${({ theme }) => theme.colors.black[100]};
      color: ${({ theme }) => theme.colors.white.base};

      &:hover {
        background: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.black[100]};
      }
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
  }
`;
