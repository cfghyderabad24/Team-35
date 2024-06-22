// import React,{useState} from "react";
// import { Link,useNavigate } from "react-router-dom";

// function ManagerDashboard() {
//     const navigate = useNavigate();
//     const [currentSection, setCurrentSection] = useState("managerdashboard"); // New state variable for current section
//     const [content, setContent] = useState(null);
      
//         const showContent = (book, button) => {
//           setContent(`Showing content for Book ${book} Button ${button}`);
//         };
      
//         const books = [
//           { id: 1, title: 'NGO NAME1', author: 'EMPLOYEE NAME1' },
//           { id: 2, title: 'NGO NAME2', author: 'EMPLOYEE NAME2' },
//           { id: 3, title: 'NGO NAME3', author: 'EMPLOYEE NAME3' },
//         ];
//         const data = [
//             { serialno: 1, empId: 'E001', empname: 'John Doe', ngoname: 'NGO1', status: 'Active' },
//             { serialno: 2, empId: 'E002', empname: 'Jane Smith', ngoname: 'NGO2', status: 'Inactive' },
//             { serialno: 3, empId: 'E003', empname: 'Bob Johnson', ngoname: 'NGO3', status: 'Active' }
//           ];
//     }      
//     return (
//         <div className="min-h-screen bg-gray-100 flex flex-col">
//             {/* Navbar */}
//             <nav className="bg-white shadow-md">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="flex justify-between h-16">
//                         <div className="flex">
//                             <div className="flex-shrink-0 flex items-center">
//                                 <h1 className="text-2xl font-bold text-gray-900">Manager Dashboard</h1>
//                             </div>
//                             <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
//                                 <Link
//                                     to="#"
//                                     className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
//                                 >
//                                     Home
//                                 </Link>
//                                 <Link
//                                     to="#"
//                                     className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
//                                 >
//                                     Profile
//                                 </Link>
//                                 <Link
//                                     to="#"
//                                     className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
//                                 >
//                                     Settings
//                                 </Link>
//                             </div>
//                         </div>
//                         <div className="hidden sm:ml-6 sm:flex sm:items-center">
//                             <button
//                                 type="button"
//                                 className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                             >
//                                 <span className="sr-only">View notifications</span>
//                                 {/* Heroicon name: bell */}
//                                 <svg
//                                     className="h-6 w-6"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                     stroke="currentColor"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m0 0a3 3 0 006 0m-6 0v1a3 3 0 006 0v-1"
//                                     />
//                                 </svg>
//                             </button>

//                             <div className="ml-3 relative">
//                                 <div>
//                                     <button
//                                         type="button"
//                                         className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                                         id="user-menu-button"
//                                         aria-expanded="false"
//                                         aria-haspopup="true"
//                                     >
//                                         <span className="sr-only">Open user menu</span>
//                                         <img
//                                             className="h-8 w-8 rounded-full"
//                                             src="https://images.unsplash.com/photo-1485856407645-baf9b3feb4f3"
//                                             alt=""
//                                         />
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </nav>

//             {/* Main Content */}
//             <div className="flex flex-1 overflow-hidden">
//                 {/* Sidebar */}
//                 <aside className="w-64 bg-white p-4 border-r border-gray-200">
//                     <nav className="flex flex-col space-y-4">
//                         <Link to="#" className="text-gray-900 font-medium">
//                             Dashboard
//                         </Link>
//                         <Link to="#" className="text-gray-600 hover:text-gray-900">
//                             Reports
//                         </Link>
//                         <Link to="#" className="text-gray-600 hover:text-gray-900">
//                             Analytics
//                         </Link>
//                         <Link to="#" className="text-gray-600 hover:text-gray-900">
//                             Messages
//                         </Link>
//                         <Link to="#" className="text-gray-600 hover:text-gray-900">
//                             Schedule
//                         </Link>
//                     </nav>
//                 </aside>
//                 </div>
//                 {/* Main Section */}

//                 {currentSection === "managerdashboard" ? (
//                     <>
//                         <h1>Welcome Manager!</h1>
               
//                <main className="flex-1 p-6 bg-gray-100 overflow-auto flex justify-center items-center">
//                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
//                        <div className="bg-white rounded-lg shadow-md flex flex-col justify-center items-center h-64 md:h-72 w-80 pt-8">
//                            <h2 className="text-lg font-bold text-gray-900 text-center">Pending</h2>
//                            <p className="mt-2 text-blue-600 text-center">DUE SOON</p>
//                            <p className="mt-2 text-red-600 text-center">OVERDUE</p>
//                            <div className="mt-auto mb-4">
//                                <button onClick={() => setCurrentSection("pending")}
//                                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
//                                    Click
//                                </button>
//                            </div>
//                        </div>
//                        <div className="bg-white rounded-lg shadow-md flex flex-col justify-center items-center h-64 md:h-72 w-80 pt-8">
//                            <h2 className="text-lg font-bold text-gray-900 text-center">Approved</h2>
//                            <p className="mt-2 text-gray-600 text-center">Content for card 2.</p>
//                            <div className="mt-auto mb-4">
//                                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
//                                    Click
//                                </button>
//                            </div>
//                        </div>
//                        <div className="bg-white rounded-lg shadow-md flex flex-col justify-center items-center h-64 md:h-72 w-80 pt-8">
//                            <h2 className="text-lg font-bold text-gray-900 text-center">Employee Status</h2>
//                            <p className="mt-2 text-gray-600 text-center">Content for card 3.</p>
//                            <div className="mt-auto mb-4">
//                                <button onClick={() => setCurrentSection("employeestatus")}
//                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
//                                    Click
//                                </button>
//                            </div>
//                        </div>
//                        <div className="bg-white rounded-lg shadow-md flex flex-col justify-center items-center h-64 md:h-72 w-80 pt-8">
//                            <h2 className="text-lg font-bold text-gray-900 text-center">Card 4</h2>
//                            <p className="mt-2 text-gray-600 text-center">Content for card 4.</p>
//                            <div className="mt-auto mb-4">
//                                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
//                                    Click
//                                </button>
//                            </div>
//                        </div>
//                    </div>
//                </main>
//                     </>
//                     ):currentSection === "pending" ? (
//                         <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
//       <div className="w-full max-w-4xl space-y-4">
//         {books.map(book => (
//           <div key={book.id} className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between">
//             <div className="flex flex-col">
//               <span className="text-lg font-bold">{book.title}</span>
//               <span className="text-gray-600">{book.author}</span>
//             </div>
//             <div className="flex space-x-2">
//               <button
//                 className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
//                 onClick={() => showContent(book.id, 1)}
//               >
//                 View Doc
//               </button>
//               <button
//                 className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
//                 onClick={() => showContent(book.id, 2)}
//               >
//                 Accept
//               </button>
//               <button
//                 className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
//                 onClick={() => showContent(book.id, 3)}
//               >
//                 Decline
//               </button>
//               <button
//                 className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                
//               >
//                 Notify
//               </button>
//             </div>
//           </div>
//                     ):currentSection === "employeestatus" ? (
//                         <div className="container mx-auto mt-4">
//       <h2 className="text-2xl font-bold mb-4">Employee Table</h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white border border-gray-200">
//           <thead>
//             <tr className="w-full bg-gray-200">
//               <th className="py-2 px-4 border-b">Serial No</th>
//               <th className="py-2 px-4 border-b">Employee ID</th>
//               <th className="py-2 px-4 border-b">Employee Name</th>
//               <th className="py-2 px-4 border-b">NGO Name</th>
//               <th className="py-2 px-4 border-b">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((row, index) => (
//               <tr key={index} className="hover:bg-gray-100">
//                 <td className="py-2 px-4 border-b">{row.serialno}</td>
//                 <td className="py-2 px-4 border-b">{row.empId}</td>
//                 <td className="py-2 px-4 border-b">{row.empname}</td>
//                 <td className="py-2 px-4 border-b">{row.ngoname}</td>
//                 <td className="py-2 px-4 border-b">{row.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
//                     ):(
//                         <p></p>
//                     )

               







//             </div>
//         </div>
//     );
// }

// export default ManagerDashboard;



import React, { useState } from "react";
import { Link } from "react-router-dom";

function ManagerDashboard() {
    const [currentSection, setCurrentSection] = useState("managerdashboard"); // New state variable for current section

    const books = [
        { id: 1, title: 'NGO NAME1', author: 'EMPLOYEE NAME1' },
        { id: 2, title: 'NGO NAME2', author: 'EMPLOYEE NAME2' },
        { id: 3, title: 'NGO NAME3', author: 'EMPLOYEE NAME3' },
    ];

    const data = [
        { serialno: 1, empId: 'E001', empname: 'John Doe', ngoname: 'NGO1', status: 'Active' },
        { serialno: 2, empId: 'E002', empname: 'Jane Smith', ngoname: 'NGO2', status: 'Inactive' },
        { serialno: 3, empId: 'E003', empname: 'Bob Johnson', ngoname: 'NGO3', status: 'Active' }
    ];

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
                        <Link onClick={() => setCurrentSection("managerdashboard")} className="text-gray-900 font-medium">
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
                <main className="flex-1 p-6 bg-gray-100 overflow-auto">
                    {currentSection === "managerdashboard" ? (
                        <>
                            <h1>Welcome Manager!</h1>
                            <div className="flex justify-center items-center">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                                    <div className="bg-white rounded-lg shadow-md flex flex-col justify-center items-center h-64 md:h-72 w-80 pt-8">
                                        <h2 className="text-lg font-bold text-gray-900 text-center">Pending</h2>
                                        <p className="mt-2 text-blue-600 text-center">DUE SOON</p>
                                        <p className="mt-2 text-red-600 text-center">OVERDUE</p>
                                        <div className="mt-auto mb-4">
                                            <button
                                                onClick={() => setCurrentSection("pending")}
                                                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                                            >
                                                Click
                                            </button>
                                        </div>
                                    </div>
                                    <div className="bg-white rounded-lg shadow-md flex flex-col justify-center items-center h-64 md:h-72 w-80 pt-8">
                                        <h2 className="text-lg font-bold text-gray-900 text-center">Approved</h2>
                                        <p className="mt-2 text-gray-600 text-center">Content for card 2.</p>
                                        <div className="mt-auto mb-4">
                                            <button
                                                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                                            >
                                                Click
                                            </button>
                                        </div>
                                    </div>
                                    <div className="bg-white rounded-lg shadow-md flex flex-col justify-center items-center h-64 md:h-72 w-80 pt-8">
                                        <h2 className="text-lg font-bold text-gray-900 text-center">Employee Status</h2>
                                        <p className="mt-2 text-gray-600 text-center">Content for card 3.</p>
                                        <div className="mt-auto mb-4">
                                            <button
                                                onClick={() => setCurrentSection("employeestatus")}
                                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                                            >
                                                Click
                                            </button>
                                        </div>
                                    </div>
                                    <div className="bg-white rounded-lg shadow-md flex flex-col justify-center items-center h-64 md:h-72 w-80 pt-8">
                                        <h2 className="text-lg font-bold text-gray-900 text-center">Card 4</h2>
                                        <p className="mt-2 text-gray-600 text-center">Content for card 4.</p>
                                        <div className="mt-auto mb-4">
                                            <button
                                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                                            >
                                                Click
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : currentSection === "pending" ? (
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
                                            >
                                                View Doc
                                            </button>
                                            <button
                                                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
                                            >
                                                Accept
                                            </button>
                                            <button
                                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
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
                        </div>
                    ) : currentSection === "employeestatus" ? (
                        <div className="container mx-auto mt-4">
                            <h2 className="text-2xl font-bold mb-4">Employee Table</h2>
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white border border-gray-200">
                                    <thead>
                                        <tr className="w-full bg-gray-200">
                                            <th className="py-2 px-4 border-b">Serial No</th>
                                            <th className="py-2 px-4 border-b">Employee ID</th>
                                            <th className="py-2 px-4 border-b">Employee Name</th>
                                            <th className="py-2 px-4 border-b">NGO Name</th>
                                            <th className="py-2 px-4 border-b">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((row, index) => (
                                            <tr key={index} className="hover:bg-gray-100">
                                                <td className="py-2 px-4 border-b">{row.serialno}</td>
                                                <td className="py-2 px-4 border-b">{row.empId}</td>
                                                <td className="py-2 px-4 border-b">{row.empname}</td>
                                                <td className="py-2 px-4 border-b">{row.ngoname}</td>
                                                <td className="py-2 px-4 border-b">{row.status}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ) : (
                        <p></p>
                    )}
                </main>
            </div>
        </div>
    );
}

export default ManagerDashboard;
