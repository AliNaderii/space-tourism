// STYLED COMPONENTS THEME PROVIDER
import { ThemeProvider } from 'styled-components';
// GLOBAL STYLE
import { GlobalStyle } from './styles/Global';

// THEME
const theme = {
  colors: {
    'Cinder': '#0b0d17',
    'Fog': '#d0d6f9',
    'White': '#fff'
  }
};

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
