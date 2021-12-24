import { DisplayGrid, SideNav, NoteCard,NoteActionButton } from "../../components";
import { useNotes, useTrash } from "../../hooks";
import "./Important.css";

export const Important = () => {
  const {notes, setNotes} = useNotes();
  const {setTrash} = useTrash();

  const data = notes.filter(note => note.type === 'Important');

  const deleteNote = (note) => {
    const temp = notes.filter(entry => entry.id !== note.id);
    setNotes(temp);
    setTrash(trash => [...trash, note]);
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