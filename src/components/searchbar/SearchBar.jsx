import React, { useState } from "react";
import Button from "../button/Button";
import SearchIcon from "../../assets/icon-search.svg";
import "./SearchBar.css";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="search-bar">
      <img src={SearchIcon} alt="Search Icon" />
      <input
        type="text"
        placeholder="Search GitHub username…"
        value={searchTerm}
        onChange={handleChange}
      />
      <Button onClick={handleSubmit}>Search</Button>
    </div>
  );
}

export default SearchBar;
