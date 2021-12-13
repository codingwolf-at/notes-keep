import { createContext, useState, useEffect } from "react";

export const notesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('notes'));
    setNotes(data);
  }, [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes])

  return (
    <notesContext.Provider value={{notes, setNotes}}>
      { children }
    </notesContext.Provider>
  )
}