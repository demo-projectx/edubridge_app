import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      {/* Logo */}
      <Link to="/" className="text-green-600 font-bold text-2xl">
        LearnLink
      </Link>

      {/* Hamburger Menu (for mobile screens) */}
      <button
        className="md:hidden text-gray-800 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Navigation Links */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex flex-col md:flex-row md:items-center absolute md:static top-16 left-0 w-full md:w-auto bg-white shadow-md md:shadow-none p-4 md:p-0`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-6 text-center md:text-left space-y-4 md:space-y-0">
          <a
            href="#features"
            className="text-gray-800 hover:text-green-600 block"
          >
            Features
          </a>

          <li>
            <a
              href="#how-it-works"
              className="text-gray-800 hover:text-green-600 block"
            >
              How It Works
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="text-gray-800 hover:text-green-600 block"
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="#awards"
              className="text-gray-800 hover:text-green-600 block"
            >
              Awards
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-800 hover:text-green-600 block"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Search Bar */}
        <div className="relative hidden md:block md:ml-6">
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

        {/* Buttons */}
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mt-4 md:mt-0">
          <Link
            to="/signUp"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-center"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="border border-green-600 text-green-600 px-4 py-2 rounded hover:bg-green-100 text-center"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
