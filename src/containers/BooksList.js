import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';

const BooksList = () => {
  const books = useSelector(state => state.books);
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
        {books.map(book => <Book key={book.id} book={book} />)}
      </tbody>
    </table>
  );
};

export default BooksList;
