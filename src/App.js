import './App.css';
// import Register from './pages/Register';
import LoginPage from './pages/LoginPage';
import { green } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}><LoginPage/></ThemeProvider>
    </div>
  );
}

export default App;
