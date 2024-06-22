import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center" h-30 w-30>
          <img src="https://th.bing.com/th/id/OIP.PvBikVrZc264HUoiz9oyCQHaG8?w=173&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Logo" className="h-20 w-20" />
        </div>
        <div className="flex space-x-4 text-white">
          <span>Email: contact@example.com</span>
          <span>Phone: (123) 456-7890</span>
        </div>
        <div>
          <button className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded">
            Donate Now
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;