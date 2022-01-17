import { useEffect, useRef, useState } from "react";
import "./form.css";
import { useNotes } from '../../hooks';

export const Form = () => {
  const [input, setInput] = useState("");
  const [radioInput, setRadioInput] = useState('General');
  const inputElement = useRef(null);

  const {dispatch} = useNotes();

  useEffect(() => {
    inputElement.current.focus();
  }, [])
  
  const inputHandler = (e) => setInput(e.target.value);


  const notesHandler = () => {
    dispatch({type: "ADD_TO_NOTES", payload: {input, radioInput}});
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