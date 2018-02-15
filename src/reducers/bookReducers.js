export const booksReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BOOK_SUCCESS':
        return action.book
    case 'FETCH_BOOKS_SUCCESS':
          return action.books;
    case 'DELETE_BOOK_BY_ID_SUCCESS':
          return state.filter(function(el) {
            return el.bookId !== action.bookId;
          });
    default:
          return state;
  }
};
