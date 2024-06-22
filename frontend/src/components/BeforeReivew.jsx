import React from "react";
import Axios from 'axios';
import { useNavigate } from "react-router-dom";

function BeforeReview() {
    const navigate = useNavigate();
    async function successlogin(event) {
        event.preventDefault();
        await trial(event);
        }
        async function trial(event) {
            const formData = {
              ngo: document.getElementById("name").value,
              dov: document.getElementById("date").value,
              review: document.getElementById("remainder").value

            };
              await Axios.post("http://localhost:5000/reviews1",formData);
              // Assuming navigate is a function that navigates to a new page
              navigate('/dashboard')
              
            
          }
  return (
    <div className="flex justify-center items-center h-screen bg-yellow-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-yellow-700">Review Form</h2>
        <form onSubmit={successlogin}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-bold mb-2 text-yellow-700">NGO Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required className="w-full px-3 py-2 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-sm font-bold mb-2 text-yellow-700">Date</label>
            <input type="date" id="date" name="date" required className="w-full px-3 py-2 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" />
          </div>
          <div className="mb-6">
            <label htmlFor="remainder" className="block text-sm font-bold mb-2 text-yellow-700">Review</label>
            <textarea id="remainder" name="remainder" rows="4" placeholder="Enter your review" required className="w-full px-3 py-2 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"></textarea>
          </div>
          <button type="submit" className="w-full py-2 bg-yellow-500 text-white font-bold rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default BeforeReview;
