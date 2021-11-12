import "./form.css"

export const DisplayGrid = ({notes}) => {
  return (
    <div className="grid-container">
      {
        notes.length 
        ? notes.map(note => (
          <div id={note.id} className="grid-item">
            <button className="item-btn close">x</button>
            <p>{note.textValue}</p>
          </div>
        ))
        : <span className="user-msg">Notes are currently empty! <br /> (┬┬﹏┬┬)</span>
      }
    </div>
  )
}