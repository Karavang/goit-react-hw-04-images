import React, { useState } from 'react';

export function Searchbar({ searchText }) {
  const [value, setValue] = useState('');

  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };

  const upgradeSearchText = e => {
    e.preventDefault();
    searchText(value.trim());
  };

  console.log(value);
  return (
    <header className="searchbar">
      <form className="SearchForm" onSubmit={upgradeSearchText}>
        <button type="submit" className="SearchForm-button"></button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          onChange={handleChange}
          value={value}
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
