import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faClipboard, faPaperPlane} from "@fortawesome/free-regular-svg-icons";
import { useNotes, useTrash } from "../../hooks";
import './NoteActionButton.css';


export const NoteActionButton = ({note, action}) => {
  const {setNotes} = useNotes();
  const {trash, setTrash} = useTrash();

  const copyHandler = () => navigator.clipboard.writeText(note.textValue);

  const restoreHandler = () => {
    const temp = trash.filter(entry => entry.id !== note.id);
    setTrash(temp);
    setNotes(notes => [...notes, note])
  }

  return (
    <div onClick={action === 'Copy' ? copyHandler : restoreHandler} className="note-action-btn">
      {
        action === 'Copy'
        ? <FontAwesomeIcon style={{margin: '0 0.2rem'}} icon={faClipboard} fixedWidth />
        : <FontAwesomeIcon style={{margin: '0 0.2rem'}} icon={faPaperPlane} fixedWidth />
      } 
      <span>{action}</span>  
    </div>
  );
};