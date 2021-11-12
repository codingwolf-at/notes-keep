import "./form.css"

export const DisplayGrid = ({notes}) => {
  return (
    <div className="grid-container">
      {
        notes.length 
        ? notes.map(note => (
          <div id={note.id} className="grid-item">
            {note.textValue}
          </div>
        ))
        : <span className="user-msg">Notes are currently empty! <br /> (┬┬﹏┬┬)</span>
      }
    </div>
  )
}