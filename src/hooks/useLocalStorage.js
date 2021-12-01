import { useEffect } from "react";

export const useLocalStorage = (notes, theme) => {
  
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes])

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  return {notes, theme};
}