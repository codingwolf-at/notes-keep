import { DisplayGrid, NoteCard } from "../../components"
import { useTrash } from "../../hooks"
import "./Trash.css";

export const Trash = () => {
  const {trash} = useTrash();
  return (
    <div>
    <h1 className="heading">Trash-Bin</h1>
      <DisplayGrid>
        {
          trash.length 
          ? trash.map(note => {
            return <NoteCard key={note.id} note={note} />;
          })
          : <span className="user-msg">Trash is currently empty! <br /> (┬┬﹏┬┬)</span>
        }
      </DisplayGrid>
    </div>
  )
}