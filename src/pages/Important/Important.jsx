import { DisplayGrid, SideNav, NoteCard,NoteActionButton } from "../../components";
import { useNotes } from "../../hooks";
import "./Important.css";

export const Important = () => {
  const {notes, dispatch} = useNotes();

  const data = notes.filter(note => note.type === 'Important');

  const deleteNote = (note) => {
    dispatch({type: "DELETE_FROM_NOTES", payload: note});
  }

  return (
    <div>
      <h1 className="heading">Important Notes</h1>
      <SideNav />
      <DisplayGrid>
        {
          data.length 
          ? data.map(note => (
            <NoteCard key={note.id} note={note} deleteNote={deleteNote} >
              <NoteActionButton note={note} action={'Copy'} />
            </NoteCard>
            ))
          : <span className="user-msg">Important notes are currently empty! <br /> (┬┬﹏┬┬)</span>
        }
      </DisplayGrid>
    </div>
  )
}