import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    font-family: 'Pretendard', sans-serif;
  }

  body {
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6, p, span, li, a, label { 
    color: #333;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  input[type="text"],
  input[type="password"],
  input[type="number"] {
    outline: none;
  }

  /* Chrome, Safari, Edge, Opera */
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;          /* Safari에서 여백 남는 것 방지 */
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;  /* 기본 화살표 제거 */
  }

  @media (min-width: 500px) {
    html {
      font-size: 20px;
    }
  }

`;

export default GlobalStyle;
