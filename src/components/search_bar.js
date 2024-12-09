import React, { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    highlightMatches();
  };

  const highlightMatches = () => {
    const elements = document.querySelectorAll(".highlightable");
    elements.forEach((element) => {
      const regex = new RegExp(`(${searchTerm})`, "gi");
      element.innerHTML = element.textContent.replace(
        regex,
        (match) => `<span class="highlight">${match}</span>`
      );
    });
  };

  return (
    <div className="search-container">
      <form
        action="#"
        method="get"
        className="search-form"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          id="search-bar"
          name="search"
          placeholder="Search..."
          aria-label="Search"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button type="submit" aria-label="Search">
          <img
            src="../images/logos_and_icons/search_icon.png"
            width="30px"
            alt="Search"
          />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
