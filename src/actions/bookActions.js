import * as actionTypes from './actionTypes';
import Axios from 'axios';

const libraryURL = 'http://localhost:3020/';
const credentials = {
  "email" : "ashan@gmail.com",
  "password" : 123
}
export const fetchBooksSuccess = (books) => {
  return {
    type: actionTypes.FETCH_BOOKS_SUCCESS,
    books
  }
};

export const createBookSuccess = (book) => {
  return {
    type: actionTypes.CREATE_BOOK_SUCCESS,
    book
  }
};

export const deleteBookByIdSuccess = (bookId) => {
  return {
    type: actionTypes.DELETE_BOOK_BY_ID_SUCCESS,
    bookId
  }
};

export const getAuthanticated = () => {
  return (dispatch) => {
    return Axios.post(libraryURL + "authenticate", credentials)
      .then(response => {
        localStorage.setItem('jwtToken', response.data.token);
        dispatch()
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const fetchBooks = () => {
  return (dispatch) => {
    return Axios.get(libraryURL + "books/getAllBooks?token="+localStorage.getItem('jwtToken'))
      .then(response => {
        console.info(response.data);
        dispatch(fetchBooksSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createBook = (book) => {
  return (dispatch) => {
    return Axios.post(libraryURL + "books/insertBook?token="+localStorage.getItem('jwtToken'), book)
      .then(response => {
        console.info(response.data.books);
        dispatch(createBookSuccess(response.data.books))
      })
      .catch(error => {
        throw(error);
      });
  };
};


export const deleteBookById = (bookId) => {
  return (dispatch) => {
    return Axios.post(libraryURL +"books/deleteBook/"+bookId+"?token="+localStorage.getItem('jwtToken'))
      .then(response => {
        console.info(response.data);
        dispatch(deleteBookByIdSuccess(bookId));
      })
      .catch(error => {
        throw(error);
      });
  };
};
