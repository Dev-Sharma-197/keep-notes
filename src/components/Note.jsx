export default function Note({ mode, id, text, date, handleDeleteNote }) {
  return (
    <div
      className={`note ${mode && "noteMode"}`}
      style={{ backgroundColor: id }}
    >
      <span>{text}</span>
      <div className="note-footer">
        <small className="date">{date}</small>
        <i
          className="fa-solid fa-trash-can"
          onClick={() => {
            handleDeleteNote(id);
          }}
        />
      </div>
    </div>
  );
}
