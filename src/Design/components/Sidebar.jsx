import React from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Mail,
  CassetteTape,
  Podcast,
  MessageCircle,
  LogOut,
  User,
} from "lucide-react"; // Importing the specified icons
import LogoutAdmin from "./LogoutAdmin";

const Sidebar = () => {
  return (
    <nav className="bg-white text-black h-screen top-0 sticky w-64 shadow-lg">
      <div className="flex items-center justify-center h-16 border-b border-gray-300">
        <span className="text-2xl font-semibold">Loom Admin</span>
      </div>
      <ul className="mt-4 ">
        <li>
          <Link
            to="/admin"
            className="flex text-sm items-center py-3 px-5  hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200"
          >
            <LayoutDashboard size={18} className="mr-3" />
            Dashboard
          </Link>
        </li>
        {/* <li>
          <Link
            to="/mail"
            className="flex text-sm items-center py-3 px-5  hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200"
          >
            <Mail size={18} className="mr-3" />
            Mail
          </Link>
        </li> */}
        <li>
          <Link
            to="/category"
            className="flex text-sm items-center py-3 px-5  hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200"
          >
            <CassetteTape size={18} className="mr-3" />
            Category
          </Link>
        </li>
        <li>
          <Link
            to="/post"
            className="flex text-sm items-center py-3 px-5  hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200"
          >
            <Podcast size={18} className="mr-3" />
            Post
          </Link>
        </li>
        <li>
          <Link
            to="/quotes"
            className="flex text-sm items-center py-3 px-5  hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200"
          >
            <MessageCircle size={18} className="mr-3" />
            Quotes
          </Link>
        </li>
        <li>
          <Link
            to="/users"
            className="flex text-sm items-center py-3 px-5 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200"
          >
            <User size={18} className="mr-3" />
            Users
          </Link>
        </li>
        <li>
          <LogoutAdmin />
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
