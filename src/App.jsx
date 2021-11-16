import { useState, useEffect } from 'react';
import './App.css';
import { Header, Form } from './components';

function App() {
  const [notes, setNotes] = useState([]);
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('notes'));
    setNotes(data);
  }, [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes])

  return (
    <div className="App" data-theme={theme}>
      <Header theme={theme} setTheme={setTheme} />
      <Form notes={notes} setNotes={setNotes} />
    </div>
  );
}

export default App;
