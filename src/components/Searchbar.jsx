import React, { useState } from 'react';
import PropTypes from 'prop-types';
export function Searchbar({ searchText }) {
  const [text, setValue] = useState('');

  const handleChange = ({ target: { value } }) => {
    console.log(value);
    setValue(value);
  };

  const upgradeSearchText = e => {
    e.preventDefault();
    searchText(text.trim());
  };

  console.log(text);
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
          value={text}
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
Searchbar.propTypes = {
  searchText: PropTypes.string,
};
