import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NoteList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    // let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    setNotes([...notes, newNote]);
  };
  const deleteNote = (id) => {
    const newNotes = notes.filter((val) => val.id !== id);
    setNotes(newNotes);
  };
  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleMode={setDarkMode} />
        <Search handlSearchText={setSearchText} />
        <NoteList
          mode={darkMode}
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText.toLowerCase())
          )}
          handleDeleteNote={deleteNote}
          handleAddNote={addNote}
        />
      </div>
    </div>
  );
}
