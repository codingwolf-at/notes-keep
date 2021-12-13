import { useNotes } from "../../hooks";
import "./display_grid.css";

export const DisplayGrid = () => {
  const {notes, setNotes} = useNotes();

  const deleteNote = (note) => {
    const temp = notes.filter(entry => entry.id !== note.id);
    setNotes(temp);
  }
  return (
    <div className="grid-container">
      {
        notes.length 
        ? notes.map(note => (
          <div id={note.id} className="grid-item">
            <button className="item-btn close" onClick={() => deleteNote(note)}>x</button>
            <span className="date">{note.date}</span>
            <p>{note.textValue}</p>
          </div>
        ))
        : <span className="user-msg">Notes are currently empty! <br /> (┬┬﹏┬┬)</span>
      }
    </div>
  )
}