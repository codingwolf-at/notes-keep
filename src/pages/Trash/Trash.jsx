import { DisplayGrid, NoteCard, NoteActionButton, SideNav } from "../../components"
import { useNotes } from "../../hooks"
import "./Trash.css";

export const Trash = () => {
  const {trash, dispatch} = useNotes();

  const deleteNote = (note) => {
    dispatch({type: "DELETE_FROM_TRASH", payload: note})
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