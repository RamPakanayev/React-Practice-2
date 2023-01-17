import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <hr />
      <p>{props.content}</p>
    </div>
  );
}

export default Note;
