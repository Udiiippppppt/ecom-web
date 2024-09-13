import React, { useState } from 'react';
import Login from './Login';

export default function SignUp() {
  const [showSignUp, setShowSignUp] = useState(true); 

  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {showSignUp ? (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Create an Account</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Confirm your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-200 shadow-md"
            >
              Sign Up
            </button>
          </form>
          <div className="mt-4 text-sm text-gray-600 text-center">
            <p>By creating an account, you agree to our Terms of Service and Privacy Policy.</p>
          </div>
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{' '}
            <a href="#" className="text-blue-500 hover:underline" onClick={toggleSignUp}>
              Log in
            </a>
          </p>
        </div>
      ) : (
        <Login /> // Render the Login component when showSignUp is false
      )}
    </div>
  );
}
