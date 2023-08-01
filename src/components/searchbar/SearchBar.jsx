import React, { useState } from "react";
import Button from "../button/Button";
import SearchIcon from "../../assets/icon-search.svg";
import "./SearchBar.css";
import { useContext } from "react";
import { UserContext } from "../user/UserProvider";

function SearchBar({ onSearch }) {
  const { error } = useContext(UserContext);

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
      {error && <p className="no-result">No&nbsp;results</p>}
      <Button onClick={handleSubmit}>Search</Button>{" "}
    </div>
  );
}

export default SearchBar;
