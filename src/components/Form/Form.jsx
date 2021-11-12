import { useState } from "react";
import "./form.css";

export const Form = ({notes, setNotes}) => {
  const [input, setInput] = useState("");
  
  const inputHandler = (e) => setInput(e.target.value);
  
  const notesHandler = () => {
    setNotes([
      ...notes, {
        textValue: input
      }
    ]);
    console.log(notes)
  }

  return (
    <div className="wrapper">
      <div className="form">
        <input type="text" onChange={(e) => inputHandler(e)} placeholder="Take a note..." />
        <button onClick={notesHandler}>Set</button>
      </div>
    </div>
  )
}