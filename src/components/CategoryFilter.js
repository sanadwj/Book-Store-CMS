import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ handleFilterChange, categories }) => (
  <select onChange={handleFilterChange}>
    <option value="">Category</option>
    {categories.map(category => (
      <option key={category}>
        {category}
      </option>
    ))}
  </select>
);

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func,
  categories: PropTypes.string,
};

CategoryFilter.defaultProps = {
  handleFilterChange: null,
  categories: [],
};

export default CategoryFilter;
