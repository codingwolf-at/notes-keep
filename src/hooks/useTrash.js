import { useContext } from "react/cjs/react.development"
import { notesContext } from "../contexts/notes-context"

export const useTrash = () => {
  const {trash, setTrash} = useContext(notesContext);
  return {trash, setTrash};
}