import { v4 as uuidv4 } from 'uuid';
import { useContext, useEffect, useRef, useState } from "react";
import "./form.css";
import { notesContext } from '../../contexts/notes-context';

export const Form = () => {
  const [input, setInput] = useState("");
  const inputElement = useRef(null);

  const {notes, setNotes} = useContext(notesContext);

  useEffect(() => {
    inputElement.current.focus();
  }, [])
  
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
        <input ref={inputElement} type="text" onChange={(e) => inputHandler(e)} value={input} placeholder="Take a note..." />
        <button onClick={notesHandler}>Add to Notes</button>
      </div>
    </div>
  )
}