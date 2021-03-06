const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = {
  books: [
    {
      id: 1,
      title: 'See, Touch, Feel',
      category: 'Kids',

    },
    {
      id: 2,
      title: 'The Sum of Us',
      category: 'History',
    },
    {
      id: 3,
      title: 'The Cat in the Hat',
      category: 'Kids',
    },
  ],
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return [...state].filter(book => book.id !== action.id);
    default:
      return state;
  }
};

export default booksReducer;
