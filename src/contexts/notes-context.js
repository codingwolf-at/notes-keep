import { createContext, useState, useEffect } from "react";

export const notesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [trash, setTrash] = useState([]);

  useEffect(() => {
    const notesData = JSON.parse(localStorage.getItem('notes'));
    const trashData = JSON.parse(localStorage.getItem('trash'));
    if (notesData) {
      setNotes(notesData);
    }
    if (trashData) {
      setTrash(trashData);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes])

  useEffect(() => {
    localStorage.setItem('trash', JSON.stringify(trash));
  }, [trash]);

  return (
    <notesContext.Provider value={{notes, setNotes, trash, setTrash}}>
      { children }
    </notesContext.Provider>
  )
}