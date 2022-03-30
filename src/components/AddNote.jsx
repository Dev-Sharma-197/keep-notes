import { useState } from "react";

export default function AddNote({ handleAddNote }) {
  const [notetext, setNoteText] = useState("");

  const handleChange = (event) => {
    setNoteText(event.target.value);
  };

  const handleSaveClick = () => {
    handleAddNote(notetext);
    setNoteText("");
  };
  const char = 200 - notetext.length;
  return (
    <div className="note new">
      <textarea
        cols="10"
        rows="8"
        value={notetext}
        placeholder="Type here to Note..."
        onChange={handleChange}
        disabled={!char}
      />
      <div className="note-footer">
        <small>{char} Reamining </small>
        <button
          type="submit"
          className="save"
          disabled={!notetext}
          onClick={handleSaveClick}
        >
          Save
        </button>
      </div>
    </div>
  );
}
