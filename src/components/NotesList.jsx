import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";

export default function NoteList({
  notes,
  mode,
  handleAddNote,
  handleDeleteNote,
  handleSearchText,
}) {
  return (
    <div className="notes-list">
      {notes.map((val) => {
        return (
          <Note
            key={val.id}
            id={val.id}
            text={val.text}
            date={val.date}
            mode={mode}
            handleSearchText={handleSearchText}
            handleDeleteNote={handleDeleteNote}
          />
        );
      })}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
}
