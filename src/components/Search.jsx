import React from "react";

const Search = ({ handlSearchText }) => {
  return (
    <div className="search">
      <i className="fa-solid fa-magnifying-glass" />
      <input
        type="text"
        onChange={(event) => handlSearchText(event.target.value)}
        placeholder="Search a Note..."
      />
    </div>
  );
};

export default Search;
