import React,{useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import Axios from 'axios';
import ChatbaseChatbotEmbed from "./ChatbaseChatbotEmbed";


function Login() {
  const navigate = useNavigate();
  const [message,setMessage]=useState("")

  async function successlogin(event) {
    const formData = {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };
      const response = await Axios.post("http://localhost:5000/login",formData);
      // Assuming navigate is a function that navigates to a new page
      if(response.data === true){
        navigate('/dashboard');
      }
      else{
        setMessage(response.data)
      }
    }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-6 text-2xl font-bold text-center leading-9 tracking-tight text-gray-900">
            Login to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                className="block w-full px-3 py-2 text-gray-900 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                className="block w-full px-3 py-2 text-gray-900 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label htmlFor="role" className="block text-sm font-medium leading-6 text-gray-900">
              Role
            </label>
            <div className="mt-2">
              <select
                id="role"
                name="role"
                required
                className="block w-full px-3 py-2 text-gray-900 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="Member">Member</option>
                <option value="Manager">Manager</option>
                <option value="Vice President">Vice President</option>
              </select>
            </div>
          </div>
          <div>
          <p style={{color:"red"}}>{message}</p>

            <button
              type="submit"
              onClick={successlogin}
              className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>

          <p className="mt-6 text-sm text-center text-gray-500">
            Don't have an account?{' '}
            <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-500">
              Register
            </Link>
          </p>
        </form>
      
      </div>
    </div>
  );
}

export default Login;
