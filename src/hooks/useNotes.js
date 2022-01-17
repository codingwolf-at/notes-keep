import { useContext } from "react"
import { notesContext } from "../contexts"

export const useNotes = () => useContext(notesContext);