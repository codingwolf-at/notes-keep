import { useState } from "react";
import "./form.css";
import { v4 as uuidv4 } from 'uuid';

export const Form = ({notes, setNotes}) => {
  const [input, setInput] = useState("");
  
  const inputHandler = (e) => setInput(e.target.value);
  
  const notesHandler = () => {
    setNotes([
      ...notes, {
        id: uuidv4(),
        textValue: input
      }
    ]);
    console.log(notes)
  }

  return (
    <div className="wrapper">
      <div className="form">
        <input type="text" onChange={(e) => inputHandler(e)} placeholder="Take a note..." />
        <button onClick={notesHandler}>Add to Notes</button>
        <DisplayGrid /> 
      </div>
    </div>
  )
}