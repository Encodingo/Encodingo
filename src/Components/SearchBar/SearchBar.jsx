import React, { useState } from 'react';
import '../SearchBar/SearchBar.css'; // Import your stylesheet
// import { IonIcon } from "@ionic/react";
// import {
//     searchCircleOutline,
//   } from "ionicons/icons";
function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form className="search-bar-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        className="search-bar-input"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button type="submit" className="search-bar-btn">
        search
      </button>
    </form>
  );
}

export default SearchBar;