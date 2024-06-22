import React from 'react';
import { useNavigate } from 'react-router-dom';
import Home from './Home'
import Navbar from './Navbar'
import Footer from './Footer'


const Hero = () => {
    const navigate = useNavigate();

    return (
        <>
        <Navbar/>
        <div className="bg-gray-100 py-20">

            <div className="container mx-auto ">
                <h1 className="text-4xl font-bold text-center ">Welcome to Our Website!</h1>
            </div>

            <div className="container mx-auto flex flex-col md:flex-row items-center mt-10">
                <div className="md:w-1/2 px-8 md:px-12 lg:px-24">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Support CRY Foundation</h1>
                    <p className="text-lg text-gray-700 mb-6">
                        Join us in our mission to ensure lasting change for children in need. Your support can help us provide education, healthcare, and a brighter future for countless children.
                    </p>
                    <button onClick={()=>{navigate('/login')}}
                    className="bg-yellow-500 text-white font-bold p-8 py-2 px-4 rounded hover:bg-yellow-600">
                        Login
                    </button>
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0 px-8 md:px-12 lg:px-24">
                    <img
                        src="https://www.cry.org/wp-content/uploads/heres-to-our-favourite-moments-from-2022-all-powered-by-you.png"
                        alt="CRY Foundation"
                        className="w-full rounded-lg shadow-md"
                    />
                </div>
            </div>
        </div>
        <Home/>
        <Footer/>
        </>
        
    );
};

export default Hero;
