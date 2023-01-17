import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    console.log(newNote);
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }
  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      <div className="note-container">
        {notes.map((noteItem) => (
          <Note
            key={noteItem.key}
            title={noteItem.title}
            content={noteItem.content}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
export default App;
