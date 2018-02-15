import React from 'react';
import {connect} from 'react-redux';
import BookForm from './BookForm';
import * as bookActions from '../../actions/bookActions';

class Book extends React.Component {
  constructor(props) {
    super(props);
  }

  submitBook(input) {
    this.props.createBook(input);
  }

  deleteBookById(bookId) {
    this.props.deleteBookById(bookId);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <h3>Books</h3>
          <table className="table">
            <thead>
            <th>
              <td>Book Name</td>
              <td> </td>
            </th>
            </thead>
            <tbody>
            {this.props.books.map((b, i) => {
              return (
                <tr key={i}>
                  <td>{b.title}</td>
                  <td>
                    <button onClick={this.deleteBookById.bind(this, b.bookId)}>Delete Book</button>
                  </td>
                </tr>
              );
            })}
            </tbody>
          </table>
        </div>
        <div className="col-md-6">
          <h3>Insert a Book</h3>
          <BookForm submitBook={this.submitBook.bind(this)}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createBook: book => dispatch(bookActions.createBook(book)),
    deleteBookById: bookId => dispatch(bookActions.deleteBookById(bookId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);
