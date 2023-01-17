import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    console.log(newNote);
    return setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function handleDelete(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => index !== id);
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      <div className="note-container">
        {notes.map((noteItem, index) => (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            delete={handleDelete}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
export default App;
