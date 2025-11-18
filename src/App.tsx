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