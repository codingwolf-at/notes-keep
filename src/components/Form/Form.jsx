import { v4 as uuidv4 } from 'uuid';
import { useEffect, useRef, useState } from "react";
import "./form.css";
import { useNotes } from '../../hooks';

export const Form = () => {
  const [input, setInput] = useState("");
  const [radioInput, setRadioInput] = useState('Note');
  const inputElement = useRef(null);

  const {setNotes} = useNotes();

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
    setNotes(notes => [
      ...notes, {
        id: uuidv4(),
        textValue: input,
        date: getDate(),
        type: radioInput
      }
    ]);
    setInput('');
  };

  const radioInputHandler = (e) => {
    setRadioInput(e.target.value);
  }
  
  return (
    <div className="wrapper">
      <div className="form">
        <input ref={inputElement} type="text" onChange={(e) => inputHandler(e)} value={input} placeholder="Take a note..." />
        <button onClick={notesHandler}>Add to Notes</button>
        <div className="radio-wrapper">
          <label className='radio-label'>
            <input 
              type="radio" 
              value='Note' 
              name='type' 
              checked={radioInput === 'Note'}
              onChange={(e) => radioInputHandler(e)} 
            />
            Note
          </label>
          <label className='radio-label'>
            <input 
              type="radio" 
              value='Reminder' 
              name='type' 
              checked={radioInput === 'Reminder'}
              onChange={(e) => radioInputHandler(e)} 
            />
            Reminder
          </label>
          <label className='radio-label'>
            <input 
              type="radio" 
              value='Important' 
              name='type' 
              checked={radioInput === 'Important'}
              onChange={(e) => radioInputHandler(e)} 
            />
            Important
          </label>
        </div>
      </div>
    </div>
  )
}