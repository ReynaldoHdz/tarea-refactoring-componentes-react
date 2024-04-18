import { useEffect } from "react";
import axios from "axios";

const List = ({ notes, setNotes, baseUrl }) => {
  const liStyle = {
    fontFamily: "Arial, Helvetica, sans-serif",
  };

  // Recupera las notas existentes en la base de datos y se actualiza cada vez que se agrega una nueva nota, de tal manera que se pueden ir agregando notas y se van mostrando debajo de las que ya existen.
  useEffect(() => {
    console.log("effect");
    axios.get(baseUrl).then((response) => {
      setNotes(response.data);
    });
  }, []);

  return (
    <ul>
      {notes.map((note) => (
        <li style={liStyle} key={note.id}>
          {note.content}
        </li>
      ))}
    </ul>
  );
};

export default List;
