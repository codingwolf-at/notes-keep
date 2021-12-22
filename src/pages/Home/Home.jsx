import { DisplayGrid, Form, NoteCard } from "../../components";
import { useNotes, useTrash } from "../../hooks";
import "./Home.css";

export const Home = () => {
  const {notes, setNotes} = useNotes();
  const {setTrash} = useTrash();

  const deleteNote = (note) => {
    const temp = notes.filter(entry => entry.id !== note.id);
    setNotes(temp);
    setTrash(trash => [...trash, note]);
  }

  return (
    <div>
      <Form />
      <DisplayGrid>
        {
          notes.length 
          ? notes.map(note => <NoteCard key={note.id} note={note} deleteNote={deleteNote} />)
          : <span className="user-msg">Notes are currently empty! <br /> (┬┬﹏┬┬)</span>
        }
      </DisplayGrid>
    </div>
  )
}