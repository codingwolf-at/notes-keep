import { SideNav, DisplayGrid, NoteCard, NoteActionButton } from "../../components";
import { useNotes, useTrash } from "../../hooks";
import "./Reminder.css";

export const Reminder = () => {
  const {notes, setNotes} = useNotes();
  const {setTrash} = useTrash();

  const data = notes.filter(note => note.type === 'Reminder');

  const deleteNote = (note) => {
    const temp = notes.filter(entry => entry.id !== note.id);
    setNotes(temp);
    setTrash(trash => [...trash, note]);
  }

  return (
    <div>
      <h1 className="heading">Reminder Notes</h1>
      <SideNav />
      <DisplayGrid>
        {
          data.length 
          ? data.map(note => (
            <NoteCard key={note.id} note={note} deleteNote={deleteNote} >
              <NoteActionButton note={note} action={'Copy'} />
            </NoteCard>
            ))
          : <span className="user-msg">Reminder notes are currently empty! <br /> (┬┬﹏┬┬)</span>
        }
      </DisplayGrid>
    </div>
  )
}