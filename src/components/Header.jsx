import React from "react";

const Header = ({ handleMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button className="save" onClick={() => handleMode((val) => !val)}>
        Toggle Theme
      </button>
    </div>
  );
};

export default Header;
