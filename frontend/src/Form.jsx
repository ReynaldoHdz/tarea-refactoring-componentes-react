import { useState } from "react";
import axios from "axios";

const Form = ({ newNote, setNewNote, notes, setNotes, baseUrl }) => {
  // Hook para saber si el cursor está sobre un elemento. Principalmente usado aquí para cambiar el estilo del botón al momento de mover el cursor sobre el botón.
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const formContainer = {
    display: "flex",
  };

  const inputStyle = {
    fontFamily: "Arial, Helvetica, sans-serif",
    borderWidth: "0.2rem",
    marginInline: "1.3rem",
    padding: "0.3rem",
  };

  const buttonStyle = {
    fontSize: "1.1rem",
    backgroundColor: isHover ? "#1495ed" : "cornflowerblue",
    color: "white",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontWeight: "bold",
  };

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      date: new Date().toISOString(), // Formato ISO para compatibilidad con SQL
    };

    axios.post(baseUrl, noteObject).then((response) => {
      console.log(response);
      setNotes(notes.concat(response.data));
      setNewNote("");
    });
  };

  return (
    <form style={formContainer} onSubmit={addNote}>
      <input style={inputStyle} value={newNote} onChange={handleNoteChange} />
      <button
        style={buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        type="submit"
      >
        Save
      </button>
    </form>
  );
};

export default Form;
