import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';
import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import { materialTheme } from './styles/muiTheme.ts';

// const theme = createTheme(themeOptions);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={materialTheme}>
      <App />
    </ThemeProvider>
  </StyledEngineProvider>
);
