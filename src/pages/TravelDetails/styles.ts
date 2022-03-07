import styled from 'styled-components';

interface Props {
  position: number;
}
export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  position: relative;
  top: ${(props) => props.position}px;
  padding: 30px;

  max-width: 423px;
  height: 550px;
  z-index: 2;
  background: #1f1601e0;

  border: 3px solid ${(props) => props.theme.colors.primary};
  border-radius: 30px;
  color: ${(props) => props.theme.colors.white.base};

  span:first-child {
    width: 100%;
    font-size: 0.8rem;
  }

  ul {
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
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const TableHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h2 {
    color: ${(props) => props.theme.colors.primary};
    margin-top: 30px;
  }

  div {
    overflow: overlay;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    p {
      width: 50%;
    }
    p:first-child {
      width: 100%;
      margin-bottom: 45px;
    }
    p:nth-child(2) {
      width: 100%;
    }
  }
`;