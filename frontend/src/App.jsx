import { useState } from "react";
import Header from "./Header";
import List from "./List";
import Form from "./Form";

const baseUrl = "http://localhost:3001/api/notes";

const App = () => {
  const appContainer = {
    display: "flex",
    flexFlow: "column",
  };

  // Hook para crear una nueva nota y poder insertar en la base de datos. Se pasan newNote y setNewNote como props al componentes hijo Form.
  const [newNote, setNewNote] = useState("");

  // Hook para recuperar una lista de todas las notas que actualmente existen en la base de datos. Se pasan notes y setNotes como props a los componentes hijos List y Form.
  const [notes, setNotes] = useState([]);

  return (
    <div style={appContainer}>
      <Header />
      <List notes={notes} setNotes={setNotes} baseUrl={baseUrl} />
      <Form
        newNote={newNote}
        setNewNote={setNewNote}
        notes={notes}
        setNotes={setNotes}
        baseUrl={baseUrl}
      />
    </div>
  );
};

export default App;
