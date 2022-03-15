import styled from 'styled-components';
import bgClose from '../../assets/images/svg/close.svg';

interface Props {
  position: {
    top: number;
    left: number;
  };
  width: number;
  height: number;
}
export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  position: absolute;
  top: ${(props) => props.position.top}px;
  left: ${(props) => props.position.left}px;
  padding: 30px;

  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  z-index: 2;
  background: #1f1601e0;

  border: 3px solid ${(props) => props.theme.colors.primary};
  border-radius: 30px;
  color: ${(props) => props.theme.colors.white.base};

  span:first-child {
    width: 100%;
    font-size: 0.8rem;
  }
    -webkit-animation: fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    animation: fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;

  /**
  * ----------------------------------------
  * animation fade-in-bottom
  * ----------------------------------------
  */
  @-webkit-keyframes fade-in-bottom {
    0% {
      -webkit-transform: translateY(50px);
              transform: translateY(50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes fade-in-bottom {
    0% {
      -webkit-transform: translateY(50px);
              transform: translateY(50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const Close = styled.div`
  display: block;
  width: 24px;
  height: 24px;

  background-image: url(${bgClose});
`;

export const TableHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  h2 {
    color: ${(props) => props.theme.colors.primary};
    margin-bottom: 0;
    top: 36px;
    
    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  }

  div {
    overflow: overlay;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    
    p {
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      width: 50%;
    }
    p:first-child {
      width: 100%;
    }
    p:nth-child(2) {
      width: 100%;
      margin-top: 25px;
    }
  }
`;

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 25px;
`;