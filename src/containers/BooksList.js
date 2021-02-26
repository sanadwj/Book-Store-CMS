import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const mapStateToProps = state => {
  const { books } = state;
  return { books };
};

const collections = books => {
  const collection = [];
  Object.keys(books).forEach(key => {
    collection.unshift({ id: key, ...books[key] });
  });
};

const Component = ({ books }) => (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Category</th>
        <th>Title</th>
      </tr>
    </thead>
    <tbody>
      {collections(books).map(book => <Book key={book.id} />)}
    </tbody>
  </table>
);

Component.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  books: PropTypes.object.isRequired,
};

const BooksList = connect(
  mapStateToProps,
  null,
)(Component);
export default BooksList;
