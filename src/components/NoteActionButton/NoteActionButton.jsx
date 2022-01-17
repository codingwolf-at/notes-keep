import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faClipboard, faPaperPlane} from "@fortawesome/free-regular-svg-icons";
import { useNotes } from "../../hooks";
import './NoteActionButton.css';


export const NoteActionButton = ({note, action}) => {
  const {dispatch} = useNotes();

  const copyHandler = () => navigator.clipboard.writeText(note.textValue);

  const restoreHandler = () => {
    dispatch({type: "RESTORE_FROM_TRASH", payload: note});
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