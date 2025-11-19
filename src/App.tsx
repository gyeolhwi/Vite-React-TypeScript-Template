/**
 * @title App 컴포넌트
 * @description 사용자는 MainLayout
 * @description 관리자는 AdminLayout
 * @description 테스트는 TestLayout
 */
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';
import GlobalStyle from './styles/globalStyle';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
