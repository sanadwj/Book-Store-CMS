import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({ categories }) => {
  const books = useSelector(state => state.books);
  const dispatch = useDispatch();

  const handleClick = e => {
    const id = parseFloat(e.target.value);
    dispatch(removeBook(id));
  };
  return (
    <>
      <CategoryFilter categories={categories} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Category</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => <Book key={book.id} book={book} remove={handleClick} />)}
        </tbody>
      </table>
    </>
  );
};

BooksList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
};

BooksList.defaultProps = {
  categories: [],
};

export default BooksList;
