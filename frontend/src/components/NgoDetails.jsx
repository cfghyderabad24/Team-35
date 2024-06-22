import React, { useState } from 'react';

const BookList = () => {
  const [content, setContent] = useState(null);

  const showContent = (book, button) => {
    setContent(`Showing content for Book ${book} Button ${button}`);
  };

  const books = [
    { id: 1, title: 'NGO NAME1', author: 'EMPLOYEE NAME1' },
    { id: 2, title: 'NGO NAME2', author: 'EMPLOYEE NAME2' },
    { id: 3, title: 'NGO NAME3', author: 'EMPLOYEE NAME3' },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-4xl space-y-4">
        {books.map(book => (
          <div key={book.id} className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-lg font-bold">{book.title}</span>
              <span className="text-gray-600">{book.author}</span>
            </div>
            <div className="flex space-x-2">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={() => showContent(book.id, 1)}
              >
                View Doc
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
                onClick={() => showContent(book.id, 2)}
              >
                Accept
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                onClick={() => showContent(book.id, 3)}
              >
                Decline
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                
              >
                Notify
              </button>
            </div>
          </div>
        ))}
      </div>
      {content && (
        <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default BookList;
