import React from 'react';

const BookDetails = ({book}) => {
  return (
    <div className="media">
      <div className="media-body">
        <h4 className="media-heading">{book.title}</h4>
        <ul>
          <li>
            <stron>Author:</stron>
            {book.author}</li>
        </ul>
      </div>
    </div>
  );
};


export default BookDetails;
