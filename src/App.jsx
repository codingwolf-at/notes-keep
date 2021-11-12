import { useState } from 'react';
import './App.css';
import { Header, Form } from './components';

function App() {
  const [notes, setNotes] = useState([]);
  return (
    <div className="App">
      <Header />
      <Form notes={notes} setNotes={setNotes} />
    </div>
  );
}

export default App;
