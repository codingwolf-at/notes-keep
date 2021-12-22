import { DisplayGrid, NoteCard } from "../../components"
import { useTrash } from "../../hooks"
import "./Trash.css";

export const Trash = () => {
  const {trash, setTrash} = useTrash();

  const deleteNote = (note) => {
    const temp = trash.filter(entry => entry.id !== note.id);
    setTrash(temp);
  }

  return (
    <div>
    <h1 className="heading">Trash-Bin</h1>
      <DisplayGrid>
        {
          trash.length 
          ? trash.map(note => {
            return <NoteCard key={note.id} note={note} deleteNote={deleteNote} />;
          })
          : <span className="user-msg">Trash is currently empty! <br /> (┬┬﹏┬┬)</span>
        }
      </DisplayGrid>
    </div>
  )
}