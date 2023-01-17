import React from "react";
import { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState([
    {
      title: "",
      content: "",
    },
  ]);
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
 
  }
  function submitNote(event) {
    event.preventDefault();
    props.addNote(note);
  }
  return (
    <div>
      <form className="create-note">
        <input
          value={note.title}
          onChange={handleChange}
          name="title"
          placeholder="Add a title ..."
        />
        <textarea
          name="content"
          value={note.content}
          placeholder="Add a content ..."
          rows="3"
          onChange={handleChange}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
