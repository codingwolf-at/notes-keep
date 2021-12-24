import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components';
import { themeContext } from './contexts/theme-context';
import './App.css';
import { Home, Important, Reminder, Trash } from './pages';

function App() {
  const {theme} = useContext(themeContext);

  return (
    <div className="App" data-theme={theme}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/reminder" element={<Reminder />} />
        <Route path="/important" element={<Important />} />
      </Routes>
    </div>
  );
}

export default App;
