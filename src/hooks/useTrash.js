
import { useContext } from "react";
import { notesContext } from "../contexts/notes-context";

export const useTrash = () => {
  const {trash, setTrash} = useContext(notesContext);
  return {trash, setTrash};
}