import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />

      <Note
        title="make my bed"
        info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        minima molestias eum illo, incidunt nemo, magni delectus sequi placeat
        quae impedit, laborum quaerat cumque eveniet laboriosam illum nisi
        laudantium deserunt.
      "
      />

      <Note
        title="learn react"
        info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        minima molllum nisi
        laudaerunt.
      "
      />

      <Note
        title="send faxes"
        info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        minima molestias eum illo,orum quaerat cumque eveniet laboriosam illum nisi
        laudantium deserunt.
      "
      />

      <Note
        title="pay taxes"
        info="Lorem ipsum dolor sit amet consectedit, laborum quaerat cumque eveniet laboriosam illum nisi
        laudantium deserunt.
      "
      />

      <Footer />
    </div>
  );
}
export default App;
