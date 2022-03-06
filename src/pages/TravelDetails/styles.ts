import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;

  z-index: 2;
  background: ${({theme}) => theme.colors.white.base};

`;