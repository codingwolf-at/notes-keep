import { DisplayGrid, Form, NoteActionButton, NoteCard, SideNav } from "../../components";
import { useNotes} from "../../hooks";
import "./Home.css";

export const Home = () => {
  const {notes, dispatch} = useNotes();

  const deleteNote = (note) => {
    dispatch({type: "DELETE_FROM_NOTES", payload: note})
  }

  return (
    <div>
      <Form />
      <SideNav />
      <DisplayGrid>
        {
          notes.length 
          ? notes.map(note => (
            <NoteCard key={note.id} note={note} deleteNote={deleteNote} >
              <NoteActionButton note={note} action={'Copy'} />
            </NoteCard>
            ))
          : <span className="user-msg">Notes are currently empty! <br /> (┬┬﹏┬┬)</span>
        }
      </DisplayGrid>
    </div>
  )
}