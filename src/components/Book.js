import React from 'react';

const Book = ({ book }) => (
  <tr>
    <td>{book.id}</td>
    <td>{book.category}</td>
    <td>{book.title}</td>
  </tr>
);

export default Book;
