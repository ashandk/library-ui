import * as actionTypes from './actionTypes';
import Axios from 'axios';

//node(library) micro-service URL
const baseURL = 'http://localhost:3020/';
const libraryBookManipulationURL =  baseURL +'books/';
const libraryUserAuthanticationURL = baseURL +'user/authenticate';

//hardcoded credentials since it is not required for the login
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

//authanticate the user against the credentials
export const getAuthanticated = () => {
    return (dispatch) => {
        return Axios.post(libraryUserAuthanticationURL, credentials)
            .then(response => {
                localStorage.setItem('jwtToken', response.data.token);
                dispatch()
            })
            .catch(error => {
                throw(error);
            });
    };
};

//get all the books in the library
export const fetchBooks = () => {
    return (dispatch) => {
        return Axios.get(libraryBookManipulationURL + "getAllBooks" + getToken())
            .then(response => {
                dispatch(fetchBooksSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};

//adding a new book to the library
export const createBook = (book) => {
    return (dispatch) => {
        return Axios.post(libraryBookManipulationURL + "insertBook" + getToken(), book)
            .then(response => {
                dispatch(createBookSuccess(response.data.books))
            })
            .catch(error => {
                throw(error);
            });
    };
};

//deleting a book from the library
export const deleteBookById = (bookId) => {
    return (dispatch) => {
        return Axios.post(libraryBookManipulationURL +"deleteBook/"+bookId + getToken())
            .then(response => {
                console.info(response);
                dispatch(deleteBookByIdSuccess(bookId));
            })
            .catch(error => {
                throw(error);
            });
    };
};

function getToken() {
    return "?token=" + localStorage.getItem('jwtToken');
}
