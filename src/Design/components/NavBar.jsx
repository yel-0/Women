import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-[#F6F5F5] p-4 shadow border-b-2 border-black">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-base font-bold text-gray-800">LOOM</div>
        <div className="space-x-4">
          <Link
            to="/"
            className="text-sm font-medium text-gray-600 hover:text-gray-800"
          >
            DISCOVER
          </Link>
          <Link
            to="/read"
            className="text-sm font-medium text-gray-600 hover:text-gray-800"
          >
            READ
          </Link>
          <Link
            to="/listen"
            className="text-sm font-medium text-gray-600 hover:text-gray-800"
          >
            LISTEN
          </Link>
          <Link
            to="/login"
            className="text-sm font-medium text-gray-600 hover:text-gray-800"
          >
            LOGIN
          </Link>
          <Link
            to="/register"
            className="text-sm font-medium text-gray-600 hover:text-gray-800"
          >
            REGISTER
          </Link>
          <Link
            to="/profile"
            className="text-sm font-medium text-gray-600 hover:text-gray-800"
          >
            YOU
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
