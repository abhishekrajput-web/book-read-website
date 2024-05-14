import React from 'react';

const BookComponent = ({book}) => {
  return (
    <div className="bg-white rounded shadow-md p-4">
      <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
      <p className="text-gray-600">ISBN: {book.isbn}</p>
      <p className="text-gray-600">Page Count: {book.pageCount}</p>
      <p className="text-gray-600">Authors: {book.authors.join(', ')}</p>
    </div>
  )
}

export default BookComponent;