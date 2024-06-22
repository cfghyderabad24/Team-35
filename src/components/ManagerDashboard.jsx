import React from "react";
import { Link,useNavigate } from "react-router-dom";

function ManagerDashboard() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            {/* Navbar */}
            <nav className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="flex-shrink-0 flex items-center">
                                <h1 className="text-2xl font-bold text-gray-900">Manager Dashboard</h1>
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
                        <div className="hidden sm:ml-6 sm:flex sm:items-center">
                            <button
                                type="button"
                                className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <span className="sr-only">View notifications</span>
                                {/* Heroicon name: bell */}
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m0 0a3 3 0 006 0m-6 0v1a3 3 0 006 0v-1"
                                    />
                                </svg>
                            </button>

                            <div className="ml-3 relative">
                                <div>
                                    <button
                                        type="button"
                                        className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        id="user-menu-button"
                                        aria-expanded="false"
                                        aria-haspopup="true"
                                    >
                                        <span className="sr-only">Open user menu</span>
                                        <img
                                            className="h-8 w-8 rounded-full"
                                            src="https://images.unsplash.com/photo-1485856407645-baf9b3feb4f3"
                                            alt=""
                                        />
                                    </button>
                                </div>
                            </div>
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
                    </nav>
                </aside>

                {/* Main Section */}



               <h1>Welcome Manager!</h1>
               
                <main className="flex-1 p-6 bg-gray-100 overflow-auto flex justify-center items-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                        <div className="bg-white rounded-lg shadow-md flex flex-col justify-center items-center h-64 md:h-72 w-80 pt-8">
                            <h2 className="text-lg font-bold text-gray-900 text-center">Pending</h2>
                            <p className="mt-2 text-blue-600 text-center">DUE SOON</p>
                            <p className="mt-2 text-red-600 text-center">OVERDUE</p>
                            <div className="mt-auto mb-4">
                                <button onClick={()=>{navigate('/pendingviews')}}
                                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                                    Click
                                </button>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md flex flex-col justify-center items-center h-64 md:h-72 w-80 pt-8">
                            <h2 className="text-lg font-bold text-gray-900 text-center">Approved</h2>
                            <p className="mt-2 text-gray-600 text-center">Content for card 2.</p>
                            <div className="mt-auto mb-4">
                                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                                    Click
                                </button>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md flex flex-col justify-center items-center h-64 md:h-72 w-80 pt-8">
                            <h2 className="text-lg font-bold text-gray-900 text-center">Employee Status</h2>
                            <p className="mt-2 text-gray-600 text-center">Content for card 3.</p>
                            <div className="mt-auto mb-4">
                                <button onClick={()=>{navigate('/employeestatus')}}
                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                                    Click
                                </button>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md flex flex-col justify-center items-center h-64 md:h-72 w-80 pt-8">
                            <h2 className="text-lg font-bold text-gray-900 text-center">Card 4</h2>
                            <p className="mt-2 text-gray-600 text-center">Content for card 4.</p>
                            <div className="mt-auto mb-4">
                                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                                    Click
                                </button>
                            </div>
                        </div>
                    </div>
                </main>







            </div>
        </div>
    );
}

export default ManagerDashboard;