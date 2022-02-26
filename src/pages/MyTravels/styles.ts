import styled from 'styled-components';

export const Container = styled.section`
  max-width: 423px;
  filter: drop-shadow(0px 3px 16px rgba(0, 0, 0, 0.25));
  border-radius: 0px 0px 15px 15px;
  overflow: hidden;
  padding-bottom: 25px;
`;

export const CardHeader = styled.header`
  height: 319px;
  background: #bdbdbd;
  border-radius: 132px 26px 0px 0px;
  position: relative;
`;

export const ButtonAction = styled.div`
  display: flex;
  width: 85px;
  height: 85px;
  background: #14a0cc;
  border-radius: 42px;

  align-items: center;
  justify-content: center;
`;

export const Flag = styled.div`
  display: flex;
  justify-content: center;

  position: absolute;
  bottom: 0;
  right: 0;

  width: 116px;
  height: 14px;

  /* Blue 2 */

  background: #2d9cdb;
  border-radius: 27px 0px 0px 0px;

  span {
    font-weight: normal;
    font-size: 0.6rem;
    /* identical to box height, or 240% */

    /* Gray 6 */

    color: #f2f2f2;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const CardBody = styled.div`
  padding: 13px 36px;
  background: #fff;

  span {
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    line-height: 2.1rem;

    color: #2d9cdb;
  }

  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 1.4rem;
    line-height: 1.7rem;
    /* or 121% */

    /* Gray 1 */

    color: #333333;
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 1.3rem;
    line-height: 1.7rem;
    /* or 131% */

    /* Gray 3 */

    color: #828282;

    margin-bottom: 0;
  }
`;

export const Intinerary = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 34px;
  left: 27%;
`;

export const Date = styled.div`
  display: flex;
  flex-direction: column;
  width: 50px;

  span:first-child {
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 21px;
    /* or 162% */

    color: #000000;
  }
  span:last-child {
    font-weight: 600;
    font-size: 0.8rem;
    line-height: 21px;

    color: #2d9cdb;
  }
`;

interface LevelProps {
  trajectory: number;
}

export const Level = styled.div<LevelProps>`
  display: flex;
  width: 71px;
  background: red;
  height: 3px;

  margin: 0 25px 0 15px;

  div {
    width: ${(props) => props.trajectory}%;
    background: #2d9cdb;
  }
`;

export const CardFooter = styled.footer`
  display: flex;
  align-items: center;

  background: #fff;

  padding: 0 0 36px 36px;
  border-radius: 0 0 30px 30px;
  span {
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 17px;
    /* identical to box height, or 170% */

    /* Gray 3 */

    color: #828282;
  }
`;

export const Avatar = styled.div`
  img {
    border-radius: 30px;
    margin-right: 6px;
  }
`;
