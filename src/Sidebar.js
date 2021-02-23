function Sidebar({ notes, onAddNote, deleteNote, activeNote, setActiveNote }) {
  return <div className='app-sidebar'>
    <div className="app-sidebard-header">
      <h1>Notes</h1>
      <button onClick={onAddNote}>Add</button>
    </div>
    <div className="app-sidebard-notes">

      {notes.map(note => (
        <div className={`app-sidebar-note ${note.id === activeNote && 'active'}`} onClick={() => setActiveNote(note.id)}>
          <div className='sidebar-note-title'>
            <strong>{note.title}</strong>
            <button onClick={() => deleteNote(note.id)}>Delete</button>
          </div>

          <p>{note.body && note.body.substr(0, 100) + '...'}</p>
          <small className='note-meta'>
            Last modified {new Date(note.lastModified).toLocaleDateString("pl-PL", {
            hour: "2-digit",
            minute: "2-digit"
          })}
          </small>
        </div>
      ))}



    </div>
  </div>
}
export default Sidebar;