import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCircleXmark, faNoteSticky, faStar } from "@fortawesome/free-regular-svg-icons";
import "./NoteCard.css";

export const NoteCard = ({note, deleteNote, children}) => {
  return (
    <div className="grid-item">
      <div className="action-group">
        <div>
          {
            note.type === 'General' && <FontAwesomeIcon style={{margin: '0 0.2rem'}} icon={faNoteSticky} fixedWidth />
          }
          {
            note.type === 'Reminder' && <FontAwesomeIcon style={{color: 'green', margin: '0 0.2rem'}} icon={faBell} fixedWidth />
          }
          {
            note.type === 'Important' && <FontAwesomeIcon style={{color: 'yellow', margin: '0 0.2rem'}} icon={faStar} fixedWidth />
          }
          <span>{note.type}</span>
        </div>
        <div className="right">
          {children}
        </div>
      </div>
      <button className="item-btn close" onClick={() => deleteNote(note)}>
        <FontAwesomeIcon icon={faCircleXmark} size="lg" fixedWidth />
      </button>
      <span className="date">{note.date}</span>
      <p className="note-text">{note.textValue}</p>
    </div>
  )
}