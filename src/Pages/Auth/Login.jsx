import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-[#efeee7] min-h-screen flex justify-center items-center">
      <div
        className="bg-[#F6F5F5] p-8 mb-[100px]  max-w-md w-full"
        style={{
          boxShadow: "6px 6px 0px rgba(0, 0, 0, 1)",
        }}
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-[13px] font-medium text-gray-700" // Adjusted text size for small screens
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              className="mt-1 block w-full py-2 bg-transparent border-b border-gray-300 focus:border-transparent focus:outline-none sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-[13px] font-medium text-gray-700" // Adjusted text size for small screens
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="mt-1 block w-full py-2 bg-transparent border-b border-gray-300 focus:border-transparent focus:outline-none sm:text-sm"
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#d8f8a5] border border-transparent rounded-full shadow-sm text-black text-[12px]"
            >
              LOGIN
            </button>
          </div>
          <div className="mt-4 text-center text-sm opacity-70">
            Don't have an account yet?
            <Link to="/register" className="underline">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
