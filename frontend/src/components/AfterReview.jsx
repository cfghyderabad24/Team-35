import React from 'react';

const CalendarForm = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="border border-gray-300 rounded-lg p-5 bg-white shadow-md w-80">
        <h2 className="text-xl font-semibold mb-4">Submit Report</h2>
        <form>
          <div className="mb-4">
            <label className="block font-bold mb-1" htmlFor="name">NGO-name</label>
            <input 
              className="w-full p-2 border border-gray-300 rounded-md" 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Enter your name" 
              required 
            />
          </div>
          
          <div className="mb-4">
            <label className="block font-bold mb-1" htmlFor="submittedDate">Submitted Date</label>
            <input 
              className="w-full p-2 border border-gray-300 rounded-md" 
              type="date" 
              id="submittedDate" 
              name="date" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-1" htmlFor="file">Upload Report</label>
            <input 
              className="w-full p-2 border border-gray-300 rounded-md" 
              type="file" 
              id="file" 
              name="file" 
            />
          </div>
          <button 
            className="w-full p-2 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600" 
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CalendarForm;