import { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Note";
import "../styles/Home.css";

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");


  useEffect(() => {
    getNotes()
  }, [])

  const getNotes = () => {
    api.get("/api/notes/")
      .then((res) => res.data)
      .then((data) => {setNotes(data); console.log(data)})
      .catch((error) => alert(error))
  };

  const deleteNote = (id) => {
    const confirm = window.confirm("Are you sure you want to delete the note?")

    if (!confirm) return;

    api.delete(`/api/notes/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) alert("Note deleted!")
        else alert("Failed to delete note")
        getNotes();
      })
      .catch((error) => alert(error))
  }

  const createNote = (e) => {
    e.preventDefault();

    api.post("/api/notes/", {content, title})
      .then((res) => {
        if (res.status === 201) alert("Note Created!")
        else alert("Failed to make note!")
        getNotes();
      })
      .catch((error) => alert(error)) 
  }
  
  return (
    <div>
      <div>
        <h2>Notes</h2>
        {notes.map((note) => (
          <Note note={note} onDelete={deleteNote} key={note.id} />
        ))}
      </div>

      <div>
        <h1 style={{color: '#777'}}>Create a Note</h1>
        <form onSubmit={createNote}>
          <label htmlFor="title">Title: </label>
          <br />
          <input 
            type="text"
            id="title"
            name="title"
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <br />
          <label htmlFor="content">Content: </label>
          <br />
          <textarea 
            name="content"
            id="content"
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <br />
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </div>
  )
}

export default Home