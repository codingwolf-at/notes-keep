import { useState, useEffect } from 'react';
import './App.css';
import { Header, Form, DisplayGrid } from './components';

function App() {
  const [notes, setNotes] = useState([]);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('notes'));
    const prevTheme = localStorage.getItem('theme');
    setNotes(data);
    setTheme(prevTheme);
  }, [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes])

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="App" data-theme={theme}>
      <Header theme={theme} setTheme={setTheme} />
      <Form notes={notes} setNotes={setNotes} />
      <DisplayGrid notes={notes} setNotes={setNotes} /> 
    </div>
  );
}

export default App;
