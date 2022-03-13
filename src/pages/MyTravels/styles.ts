import styled from 'styled-components';
import bgImg from '../../assets/images/images/bg-map.jpeg'


export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const AlertContainer = styled.div``;

export const TextHeader = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  p {
    font-size: 0.8rem;
    margin-top: 25px;
    text-align: center;
    width: 90%;
  }
`;

export const CardContainer = styled.section`
  max-width: 391px;

  border: 1px solid ${({theme}) => theme.colors.gray[100]};
  filter: drop-shadow(0px 3px 16px rgba(0, 0, 0, 0.25));
  box-shadow: inset 0 0 96px #0000008f;

  overflow: hidden;

  padding-bottom: 25px;
  margin: 25px 0;

  border-radius: 30px;
  z-index: 1;

  &::before {
    overflow: hidden;
    content: '';
    height: 500px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background: ${({ theme }) => theme.colors.white.base};
    background-image: url(${bgImg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.2;
  }

  p {
    margin-top: 25px;
  }

  .alert {
    display: flex;
    justify-content: center;

    position: absolute;
    left: 18%;
    width: 250px;
    
    border-radius: 0 0 30px 30px;
  }
`;

export const CardHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  height: 235px;

  padding: 35px 28px 0 28px;
  overflow: hidden;
  z-index: 0;

  .collapse {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    width: -webkit-fill-available;
    height: 104px;

    box-shadow: inset 0 0 24px #f0da8a96;
    background-color: #544a1c42;
    border: 1px solid #988d642e;
    border-radius: 12px 12px 0 0;

    padding: 14px;

    -webkit-animation: slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

    h2 {
      font-size: 0.8rem;
      margin-bottom: 0.5rem;
      font-weight: normal;
    }

    .btn-group {
      flex-wrap: wrap;
      border-radius: 55px;

      overflow: hidden;
      height: 44px;
      width: inherit;

      box-shadow: 0px 0px 50px 10px rgb(255 209 40 / 62%);

      .btn-primary {
        color: ${({ theme }) => theme.colors.white};
        background-color: #ffd428;
        border-color: #fdc90d;

        font-weight: 600;
      
      }
    }

    /**
    * ----------------------------------------
    * animation slide-top
    * ----------------------------------------
    */
    @-webkit-keyframes slide-top {
      0% {
        -webkit-transform: translateY(50px);
                transform: translateY(50px);
      }
      100% {
        -webkit-transform: translateY(0px);
                transform: translateY(0px);
      }
    }
    @keyframes slide-top {
      0% {
        -webkit-transform: translateY(50px);
                transform: translateY(50px);
      }
      100% {
        -webkit-transform: translateY(0px);
                transform: translateY(0px);
      }
    }
  }
`;

export const ButtonAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 92px;
  height: fit-content;
  border-radius: 50px;
  margin-bottom: 15px;

  .btn {
    width: inherit;
    height: inherit;
    border-radius: inherit;

    font-size: 0.8rem;
    font-weight: 600;

    background-color: #514617;
    color: #ffffff;
    border: 1px solid #514617;
  }
`;

export const Flag = styled.div`
  display: flex;
  justify-content: center;

  width: 140px;
  height: 25px;

  background: ${({theme}) => theme.colors.secondary};
  border-radius: 27px 8px 0px 0px;

  span {
    display: contents;
    font-weight: normal;
    font-size: 0.7rem;

    color: ${({theme}) => theme.colors.white.base};

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const CardBody = styled.div`
  padding: 13px 18px;
  margin: 0 28px;
  z-index: 0;

  border-top: 2px solid ${({theme}) => theme.colors.primary};

  background: ${({theme}) => theme.colors.white.base};

  span {
    font-style: normal;
    font-size: 0.8rem;
    line-height: 2.1rem;

    color: ${({theme}) => theme.colors.black[100]};
  }

  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 0.8rem;
    line-height: 1rem;

    margin-bottom: 6px;
    color: ${({theme}) => theme.colors.black[100]};

    &:first-letter {
      text-transform: capitalize;
    }
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 0.8rem;
    line-height: 1rem;

    color: ${({theme}) => theme.colors.black[100]};

    margin-bottom: 0;

    &:first-letter {
      text-transform: capitalize;
    }
  }
`;

export const Intinerary = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  padding: 12px;
  margin-bottom: 18px;

  border-radius: 12px;
  background: #ffc107;
  border: 1px solid #ffd0156e;
  box-shadow: inset 0 0 15px #eab1123d;

  div:last-child {
    span {
      text-align: right;
    }
  }
`;

export const Date = styled.div`
  display: flex;
  flex-direction: column;
  width: 120px;

  span:first-child {
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 21px;
    /* or 162% */

    color: #000000;
  }
  span:last-child {
    font-weight: normal;
    font-size: 0.8rem;
    line-height: 21px;

    color: ${({theme}) => theme.colors.black[100]};
  }
`;

interface LevelProps {
  trajectory: number;
}

export const Level = styled.div<LevelProps>`
  display: flex;
  width: 71px;
  background: #e8bc0c;
  height: 3px;

  margin: 0 25px 0 15px;

  div {
    width: ${(props) => props.trajectory}%;
    background: ${({theme}) => theme.colors.white.base};
  }
`;

export const CardFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 15px 19px 18px;
  margin: 0 28px;
  background: ${({theme}) => theme.colors.white.base};
  border-radius: 0 0 12px 12px;

  div {
    span {
      font-style: normal;
      font-size: 0.8rem;
      border: none;
      color: #828282;
    }
  }
`;

export const Avatar = styled.div`
  img {
    border-radius: 30px;
    margin-right: 6px;
  }
`;

export const Details = styled.div`
  button {
    padding: 3px 10px;
    border: 2px solid #ff8900;
    border-radius: 21px;
    font-size: 0.6rem;
    background: transparent;
    color: ${({theme}) => theme.colors.black[100]};
  }
`;
