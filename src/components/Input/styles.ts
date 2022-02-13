import styled, { css } from 'styled-components';

type Props = {
  error: boolean;
  warning: boolean;
};

export const Container = styled.div<Props>`
  position: relative;

  input {
    flex: 1;

    width: 100%;
    height: 70px;

    border-bottom: 2px solid ${({ theme }) => theme.colors.gray[100]};

    font-size: 2rem;
    line-height: 3rem;

    color: ${({ theme }) => theme.colors.black};

    transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -webkit-appearance: none;

    background: transparent;

    &::placeholder {
      color: transparent;
    }

    &:hover,
    &:focus {
      transition: all 0.3s;

      border-color: ${({ theme }) => theme.colors.black};
    }

    &:required:invalid + label:before {
      content: '*';
    }

    &:focus + label,
    &:not(:placeholder-shown) + label {
      font-size: 1.3rem;
      line-height: 1.5rem;

      top: calc(50% - 29px);

      color: ${({ error, theme }) =>
        !error ? theme.colors.black : theme.colors.error};
    }

    @media screen and (max-width: 610px) {
      font-size: 1.4rem;
    }
  }

  label {
    pointer-events: none;

    position: absolute;
    top: 50%;
    left: 0;

    transform: translate3d(0, -50%, 0);
    transition: all 0.3s ease-out;

    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;

    font-size: 2rem;
    line-height: 2.4rem;

    color: ${({ theme }) => theme.colors.gray[100]};

    @media screen and (max-width: 610px) {
      font-size: 1.4rem;
    }
  }

  div {
    position: absolute;
    right: 0;
    bottom: 16px;

    img {
    }
  }

  ${({ error, theme }) =>
    error &&
    css`
      label {
        color: ${theme.colors.error};
      }

      input {
        border-bottom: 2px solid ${theme.colors.error};

        color: ${theme.colors.error};

        &:hover,
        &:focus {
          border-color: ${theme.colors.error};
        }

        &:focus + label,
        &:not(:placeholder-shown) + label {
          color: ${theme.colors.error};
        }
      }
    `}

  ${({ warning, theme }) =>
    warning &&
    css`
      label {
        color: ${theme.colors.warning};
      }

      input {
        border-bottom: 2px solid ${theme.colors.warning};

        color: ${theme.colors.warning};

        &:hover,
        &:focus {
          border-color: ${theme.colors.warning};
        }

        &:focus + label,
        &:not(:placeholder-shown) + label {
          color: ${theme.colors.warning};
        }
      }
    `}
`;
