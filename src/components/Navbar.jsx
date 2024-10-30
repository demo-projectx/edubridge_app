import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      <div className="text-green-600 font-bold text-2xl">EduBridge</div>
      <div className="hidden md:flex space-x-6">
        <a href="#features" className="text-gray-800 hover:text-green-600">
          Features
        </a>
        <a href="#how-it-works" className="text-gray-800 hover:text-green-600">
          How It Works
        </a>
        <a href="#testimonials" className="text-gray-800 hover:text-green-600">
          Testimonials
        </a>
        <a href="#awards" className="text-gray-800 hover:text-green-600">
          Awards
        </a>
        <a href="#contact" className="text-gray-800 hover:text-green-600">
          Contact
        </a>
      </div>

      {/* Search Bar */}
      <div className="hidden md:flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button className="absolute right-1 top-1 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1111.668 3.9l4.352 4.353a1 1 0 01-1.414 1.414l-4.353-4.352A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Get Started
        </button>
        <button className="border border-green-600 text-green-600 px-4 py-2 rounded hover:bg-green-100">
          Learn More
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
