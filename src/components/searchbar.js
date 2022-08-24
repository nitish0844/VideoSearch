import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(term);
  };

  return (
    <div
      className="search-bar ui segment"
      style={{ backgroundColor: "#431e63" }}
    >
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label style={{ color: "#fff" }}>Search for a videos</label>
          <input type="text" value={term} onChange={onInputChange} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
