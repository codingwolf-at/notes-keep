import { useContext } from 'react';
import './App.css';
import { Header, Form, DisplayGrid } from './components';
import { themeContext } from './contexts/theme-context';

function App() {
  const {theme} = useContext(themeContext);

  return (
    <div className="App" data-theme={theme}>
      <Header />
      <Form />
      <DisplayGrid /> 
    </div>
  );
}

export default App;
