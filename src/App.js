// TOOLS
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// STYLED COMPONENTS THEME PROVIDER
import { ThemeProvider } from 'styled-components';
// GLOBAL STYLE
import { GlobalStyle } from './styles/Global';
// COMPONENTS
import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';

// THEME
const theme = {
  colors: {
    'Cinder': '#0b0d17',
    'Fog': '#d0d6f9',
    'White': '#fff',
  }
};

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyle />
      <main>
        <Router>
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/destination/:name' element={ <Destination /> } />
            <Route path='/crew/:name' element={ <Crew /> } />
            <Route path='/technology/:name' element={ <Technology /> } />
          </Routes>
        </Router>
      </main>
    </ThemeProvider>
  );
}

export default App;
