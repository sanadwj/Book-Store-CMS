import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions';

const BooksList = () => {
  const books = useSelector(state => state.books);
  const dispatch = useDispatch();

  const handleClick = e => {
    e.preventDefault();
    const book = books.map(book => book.id);
    dispatch(removeBook(book));
  };
  console.log(books);
  return (
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
  );
};

export default BooksList;
