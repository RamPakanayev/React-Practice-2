import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <hr/>
      <p>{props.info}</p>
    </div>
  );
}

export default Note;
