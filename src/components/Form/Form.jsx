import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import "./form.css";
import { DisplayGrid } from './DisplayGrid';

export const Form = ({notes, setNotes}) => {
  const [input, setInput] = useState("");
  
  const inputHandler = (e) => setInput(e.target.value);
  
  const getDate = () => {
    const d = new Date();
    const day = d.getDate();
    const month = d.getMonth()+1;
    const year = d.getFullYear();
    return `${day}/${month}/${year}`
  }

  const notesHandler = () => {
    setNotes([
      ...notes, {
        id: uuidv4(),
        textValue: input,
        date: getDate()
      }
    ]);
    setInput("")
  }
  return (
    <div className="wrapper">
      <div className="form">
        <input type="text" onChange={(e) => inputHandler(e)} value={input} placeholder="Take a note..." />
        <button onClick={notesHandler}>Add to Notes</button>
      </div>
      <DisplayGrid notes={notes} setNotes={setNotes} /> 
    </div>
  )
}