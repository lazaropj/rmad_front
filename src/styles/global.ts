import { createGlobalStyle, css } from 'styled-components';

import NunitoFontLt from 'src/assets/fonts/Nunito-Light.ttf';
import NunitoFontRg from 'src/assets/fonts/Nunito-Regular.ttf';
import NunitoFontSb from 'src/assets/fonts/Nunito-SemiBold.ttf';
import NunitoFontBd from 'src/assets/fonts/Nunito-Bold.ttf';

type Props = {
  modalIsActive: boolean;
};

export default createGlobalStyle<Props>`
  ${({ modalIsActive }) =>
    modalIsActive &&
    css`
      body,
      html {
        overflow-x: hidden;
        overflow-y: hidden;
      }
    `}

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.2rem;
    background: black;
  }

  @font-face {
    font-family: 'Nunito';
    src: local('Nunito'), url(${NunitoFontLt}) format('truetype');
    font-weight: thin;
  }

  @font-face {
    font-family: 'Nunito';
    src: local('Nunito'), url(${NunitoFontRg}) format('truetype');
    font-weight: normal;
  }

  @font-face {
    font-family: 'Nunito';
    src: local('Nunito'), url(${NunitoFontBd}) format('truetype');
    font-weight: bold;
  }

  body, html {
    height: 100vh;

    overflow-x: hidden;
    font-family:'Nunito', sans-serif !important;
    font-weight: normal !important;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  button {
    background: transparent;
    cursor: pointer;
  }

  i {
    display:inline-block;
    font-size: 1.6rem;
    line-height: 1;

    width: 1em;
    height: 1em;
  }

`;
