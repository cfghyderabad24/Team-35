import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function BeforeReview() {
  const [formData, setFormData] = useState({
    ngo: '',
    dov: '',
    review: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const successlogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/reviews1', formData);
      console.log('Response:', response.data);
      // Navigate to a success page or show a success message
      navigate('/dashboard'); // Adjust the route as needed
    } catch (error) {
      console.error('Error posting review:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-yellow-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-yellow-700">Review Form</h2>
        <form onSubmit={successlogin}>
          <div className="mb-4">
            <label htmlFor="ngo" className="block text-sm font-bold mb-2 text-yellow-700">NGO Name</label>
            <input type="text" id="ngo" name="ngo" placeholder="Enter NGO name" required className="w-full px-3 py-2 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label htmlFor="dov" className="block text-sm font-bold mb-2 text-yellow-700">Date of Visit</label>
            <input type="date" id="dov" name="dov" required className="w-full px-3 py-2 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" onChange={handleChange} />
          </div>
          <div className="mb-6">
            <label htmlFor="review" className="block text-sm font-bold mb-2 text-yellow-700">Review</label>
            <textarea id="review" name="review" rows="4" placeholder="Enter your review" required className="w-full px-3 py-2 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" onChange={handleChange}></textarea>
          </div>
          <button type="submit" className="w-full py-2 bg-yellow-500 text-white font-bold rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default BeforeReview;
