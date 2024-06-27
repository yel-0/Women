import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#F6F5F5] text-gray-600 py-2 text-center">
      <div className="container mx-auto">
        <p className="text-xs">&copy; 2024 Group-10. All rights reserved.</p>
        <p className="text-xs">Created with ❤️</p>
        <div className="mt-1">
          <a href="#" className="text-gray-600 mx-2 text-xs">
            Terms of Service
          </a>
          <span className="text-gray-600"> | </span>
          <a href="#" className="text-gray-600 mx-2 text-xs">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
