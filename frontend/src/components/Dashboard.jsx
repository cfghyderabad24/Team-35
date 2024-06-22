import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Typing from 'react-typing-effect';
import Card from './Card'
import Axios from 'axios';
function Dashboard() {
    const [showEventProgress, setShowEventProgress] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const profileRef = useRef(null);
    const navigate = useNavigate();

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
                const response = await Axios.get("http://localhost:5000/getreviews");
                 console.log(response.data)
                setBlogs(response.data);
        };

        fetchData();
    }, []);
    const toggleEventProgress = () => {
        setShowEventProgress(!showEventProgress);
    };

    const beforeReviewForm = () => {
        navigate('/beforevisit');
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const logout=()=>{
        navigate('/login');
    }

    const formatDate = (isoDateString) => {
        const date = new Date(isoDateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear() % 100; // Get last two digits of the year
        return `${day}/${month}/${year}`;
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [profileRef]);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            {/* Navbar */}
            <nav className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="flex-shrink-0 flex items-center">
                                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                            </div>
                            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                <Link
                                    to="#"
                                    className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                >
                                    Home
                                </Link>
                                <Link
                                    to="#"
                                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                >
                                    Profile
                                </Link>
                                <Link
                                    to="#"
                                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                >
                                    Settings
                                </Link>
                            </div>
                        </div>
                        <div className="relative" ref={profileRef}>
                            <button
                                onClick={toggleDropdown}
                                className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <span className="sr-only">Open user menu</span>
                                <img
                                    className="h-8 w-8 rounded-full"
                                    src="https://images.unsplash.com/photo-1485856407645-baf9b3feb4f3"
                                    alt="Profile"
                                />
                            </button>

                            {isOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                                    <div className="p-4">
                                        <p className="text-gray-900 font-medium">Retineni Rohan</p>
                                        <button
                                            onClick={logout}
                                            className="mt-2 w-full py-2 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <aside className="w-64 bg-white p-4 border-r border-gray-200">
                    <nav className="flex flex-col space-y-4">
                        <Link to="#" className="text-gray-900 font-medium">
                            Dashboard
                        </Link>
                        <Link to="#" className="text-gray-600 hover:text-gray-900">
                            Reports
                        </Link>
                        <Link to="#" className="text-gray-600 hover:text-gray-900">
                            Analytics
                        </Link>
                        <Link to="#" className="text-gray-600 hover:text-gray-900">
                            Messages
                        </Link>
                        <Link to="#" className="text-gray-600 hover:text-gray-900">
                            Schedule
                        </Link>
                        <Link to="/login" className="text-gray-600 hover:text-gray-900 mt-auto">
                            Logout
                        </Link>

                    </nav>
                </aside>

                {/* Main Section */}
                <main className="flex-1 p-6 bg-gray-100 overflow-auto">
                    <div className="mb-6 text-center">
                        <Typing
                            text={["Welcome Rohan"]}
                            speed={100}
                            eraseDelay={1000}
                            cursorClassName="text-indigo-500"
                            className="text-indigo-500 text-4xl font-bold"
                        />
                    </div>

                    <div className="mb-6 text-center">
                        <button
                            onClick={beforeReviewForm}
                            className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-4"
                        >
                            Before Review
                        </button>
                        <button
                            className="bg-green-500 text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-4"
                        >
                            Approved
                        </button>
                        <button
                            onClick={toggleEventProgress}
                            className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Project Wise Progress
                        </button>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                        <h2 className="text-lg font-bold text-gray-900 mb-2">Overall Progress</h2>
                        <div className="relative pt-1">
                            <div className="flex mb-2 items-center justify-between">
                                <div>
                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200">
                                        Progress
                                    </span>
                                </div>
                                <div className="text-right">
                                    <span className="text-xs font-semibold inline-block text-indigo-600">
                                        70%
                                    </span>
                                </div>
                            </div>
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
                                <div
                                    style={{ width: "70%" }}
                                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"
                                ></div>
                            </div>
                        </div>
                    </div>
                    {showEventProgress && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h2 className="text-lg font-bold text-gray-900">Event 1 Progress</h2>
                                <div className="relative pt-1">
                                    <div className="flex mb-2 items-center justify-between">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200">
                                                Progress
                                            </span>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-xs font-semibold inline-block text-indigo-600">
                                                80%
                                            </span>
                                        </div>
                                    </div>
                                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
                                        <div
                                            style={{ width: "80%" }}
                                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h2 className="text-lg font-bold text-gray-900">Event 2 Progress</h2>
                                <div className="relative pt-1">
                                    <div className="flex mb-2 items-center justify-between">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200">
                                                Progress
                                            </span>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-xs font-semibold inline-block text-indigo-600">
                                                60%
                                            </span>
                                        </div>
                                    </div>
                                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
                                        <div
                                            style={{ width: "60%" }}
                                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h2 className="text-lg font-bold text-gray-900">Event 3 Progress</h2>
                                <div className="relative pt-1">
                                    <div className="flex mb-2 items-center justify-between">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200">
                                                Progress
                                            </span>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-xs font-semibold inline-block text-indigo-600">
                                                90%
                                            </span>
                                        </div>
                                    </div>
                                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
                                        <div
                                            style={{ width: "90%" }}
                                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <h1>Work</h1>
                    <div >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                
                {blogs.map((element, index) => (
                    // console.log(index),
                    <Card
    key={index}
    id={index}
    name={element.ngo}
    targetDate={formatDate(element.dov)}
    reviewContent={element.review}
/>

                ))}
                
            </div>
                    {/* <Card 
                            name={"Helping Hands"}
                            targetDate={"December 31, 2024"}
                            reviewContent={"Helping Hands is dedicated to providing support to underprivileged communities. Their initiatives in education and healthcare have made a significant impact."}
                        />
                    <Card 
                            name={"Helping Hands"}
                            targetDate={"December 31, 2024"}
                            reviewContent={"Helping Hands is dedicated to providing support to underprivileged communities. Their initiatives in education and healthcare have made a significant impact."}
                        />
                    <Card 
                            name={"Helping Hands"}
                            targetDate={"December 31, 2024"}
                            reviewContent={"Helping Hands is dedicated to providing support to underprivileged communities. Their initiatives in education and healthcare have made a significant impact."}
                        />
                    <Card 
                            name={"Helping Hands"}
                            targetDate={"December 31, 2024"}
                            reviewContent={"Helping Hands is dedicated to providing support to underprivileged communities. Their initiatives in education and healthcare have made a significant impact."}
                        />
                    <Card 
                            name={"Helping Hands"}
                            targetDate={"December 31, 2024"}
                            reviewContent={"Helping Hands is dedicated to providing support to underprivileged communities. Their initiatives in education and healthcare have made a significant impact."}
                        /> */}

      </div>
    </div>
                </main>
            </div>
        </div>
    );
}

export default Dashboard;