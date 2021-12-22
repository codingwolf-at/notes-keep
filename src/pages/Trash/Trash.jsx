import { DisplayGrid, NoteCard, NoteActionButton, SideNav } from "../../components"
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
      <SideNav />
      <DisplayGrid>
        {
          trash.length 
          ? trash.map(note => (
            <NoteCard key={note.id} note={note} deleteNote={deleteNote} >
              <NoteActionButton note={note} action={'Restore'} />
            </NoteCard>
            ))
          : <span className="user-msg">Trash-Bin is currently empty! <br /> (┬┬﹏┬┬)</span>
        }
      </DisplayGrid>
    </div>
  )
}