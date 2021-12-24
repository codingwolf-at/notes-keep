import { useContext } from "react"
import { notesContext } from "../contexts"

export const useNotes = () => {
  const {notes, setNotes} = useContext(notesContext);
  return {notes, setNotes}
}