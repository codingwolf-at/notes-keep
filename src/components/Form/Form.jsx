import { v4 as uuidv4 } from 'uuid';
import { useEffect, useRef, useState } from "react";
import "./form.css";
import { useNotes } from '../../hooks';

export const Form = () => {
  const [input, setInput] = useState("");
  const [radioInput, setRadioInput] = useState('General');
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
          {
            ['General', 'Reminder', 'Important'].map((category, index) => (
              <label key={index} className='radio-label'>
                <input 
                  type="radio" 
                  value={category} 
                  name='type' 
                  checked={radioInput === category}
                  onChange={(e) => radioInputHandler(e)} 
                />
                {category}
              </label>
            ))
          }
        </div>
      </div>
    </div>
  )
}