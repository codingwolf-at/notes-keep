import "./NoteCard.css";

export const NoteCard = ({note, deleteNote}) => {
  return (
    <div className="grid-item">
      <button className="item-btn close" onClick={() => deleteNote(note)}>x</button>
      <span className="date">{note.date}</span>
      <p>{note.textValue}</p>
    </div>
  )
}