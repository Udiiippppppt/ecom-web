import React, { useState } from 'react';
import Login from './Login';

export default function ForgotPassword() {
  const [showForgotPassword, setShowForgotPassword] = useState(true);

  const toggleForgotPassword = () => {
    setShowForgotPassword(!showForgotPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Password reset request submitted!');
    // Add your password reset logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {showForgotPassword ? (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Forgot Password</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-200 shadow-md"
            >
              Reset Password
            </button>
          </form>
          <div className="mt-4 text-sm text-gray-600 text-center">
            <p>A password reset link will be sent to your email address.</p>
          </div>
          <p className="text-center text-sm text-gray-600 mt-4">
            Remember your password?{' '}
            <a href="#" className="text-blue-500 hover:underline" onClick={toggleForgotPassword}>
              Log in
            </a>
          </p>
        </div>
      ) : (
        <Login /> // Render the Login component when showForgotPassword is false
      )}
    </div>
  );
}
