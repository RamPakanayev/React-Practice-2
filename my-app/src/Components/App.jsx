import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import tasks from "../task";

function App() {
  return (
    <div1>
      <Header />
      <div className="note-container">
        {tasks.map((task) => (
          <Note key={task.key} title={task.title} info={task.info} />
        ))}
      </div>
      <Footer />
    </div1>
  );
}
export default App;
