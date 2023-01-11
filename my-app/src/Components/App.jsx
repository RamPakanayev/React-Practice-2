import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import tasks from "../task";

function MakeTask(task) {
  return <Note key={task.key} title={task.title} info={task.info} />;
}

function App() {
  return ( 
    <div>
      <Header />

      {tasks.map(MakeTask)}

      <Footer />
    </div>
  );
}
export default App;
