import { v4 as uuidv4 } from 'uuid';
import { createContext, useReducer, useEffect } from "react";
import {getDate} from "../utils";

export const notesContext = createContext();

export const NotesProvider = ({ children }) => {

  const [{notes, trash}, dispatch] = useReducer(notesReducer, {notes: [], trash: []});

  useEffect(() => {
    const notesData = JSON.parse(localStorage.getItem('notes'));
    const trashData = JSON.parse(localStorage.getItem('trash'));
    if (notesData.length > 0 || trashData.length > 0) {
      dispatch({type: "UPDATE_FROM_LOCAL_STORAGE", payload: {notesData, trashData}})
    } 
  }, [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes])

  useEffect(() => {
    localStorage.setItem('trash', JSON.stringify(trash));
  }, [trash]);

  return (
    <notesContext.Provider value={{notes, trash, dispatch}}>
      { children }
    </notesContext.Provider>
  )
}

const notesReducer = (state, action) => {
  switch(action.type) {
    case "UPDATE_FROM_LOCAL_STORAGE":
      return {
        notes: action.payload.notesData,
        trash: action.payload.trashData
      }
    case "ADD_TO_NOTES": 
      return {
        notes: state.notes.concat({
          id: uuidv4(),
          textValue: action.payload.input,
          date: getDate(),
          type: action.payload.radioInput
        }),
        trash: state.trash
      }
    case "DELETE_FROM_NOTES":
      return {
        notes: state.notes.filter(note => note.id !== action.payload.id),
        trash: state.trash.concat(action.payload)
      }
    case "RESTORE_FROM_TRASH":
      return {
        notes: state.notes.concat(action.payload),
        trash: state.trash.filter(note => note.id !== action.payload.id)
      }
    case "DELETE_FROM_TRASH":
      return {
        notes: state.notes,
        trash: state.trash.filter(note => note.id !== action.payload.id)
      }
    default:
      return state;
  }
}