// NGOCard.js
import React from 'react';

function Card(props) {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">{props.name}</h2>
        <p className="text-gray-600">Target Date: {props.targetDate}</p>
        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-700">Review:</h3>
          <p className="text-gray-600">{props.reviewContent}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
