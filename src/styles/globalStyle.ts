import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
/* 프로젝트에 따라 폰트를 변경할 수 있습니다. */

  /* Google Fonts CDN 사용 시 */
  @import url('https://fonts.googleapis.com/css2?family=Gamja+Flower&display=swap');
  /* 로컬 폰트 파일 사용 시 */

  /* @font-face {
    font-family: 'Gamja Flower';
    src: url('/fonts/GamjaFlower-Regular.woff2') format('woff2'),
         url('/fonts/GamjaFlower-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  } */
    
  /* 기본 리셋 */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Gamja Flower', sans-serif;
  }

  /* HTML 기본 설정 */
  html {
    font-size: 16px; /* 기본 */
  }

  /* Body 기본 설정 */
  body {
    margin: 0;
    /* 폰트 렌더링 최적화 - macOS/iOS에서 텍스트를 더 부드럽게 보이게 함
       -webkit-font-smoothing: macOS/iOS Safari/Chrome에서 폰트를 안티앨리어싱 처리
       -moz-osx-font-smoothing: Firefox macOS에서 폰트를 그레이스케일 처리
       선택사항이지만 텍스트 가독성을 향상시킴 */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Root div 기본 설정 */
  #root {
    width: 100%;
  }

  /* 링크 스타일 */
  a {
    text-decoration: none;
  }

  /* 리스트 스타일 제거 */
  ul, ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  /* 버튼 기본 스타일 제거 */
  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
  }

  /* 타이포그래피 */
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6, p, span, li, a, label {
    color: #333;
  }

  /* 폼 요소 */
  input[type="text"],
  input[type="password"],
  input[type="number"] {
    outline: none;
  }

  /* Number Input 스피너 제거 - Chrome, Safari, Edge, Opera */
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Number Input 스피너 제거 - Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
  }

  /* 이미지 반응형 처리 */
  img {
    max-width: 100%;
    height: auto;
  }

  /* 반응형 폰트 크기 */
  @media (max-width: 480px) {
    html {
      font-size: 14px; /* 모바일 */
    }
  }
`;

export default GlobalStyle;
