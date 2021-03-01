import React, { useState } from 'react';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
const BooksForm = () => {
  const handleClick = e => {
    e.preventDefault();
  };
  return (
    <div>
      <input onChange={handleChange} value={state.value} />
      <select>
        {categories.map(category => (
          <option key={category}>
            {' '}
            {category}
          </option>
        ))}
      </select>
      <button type="button" value="Submit" onClick={handleClick}>
        Submit
      </button>
    </div>
  );
};

export default BooksForm;
