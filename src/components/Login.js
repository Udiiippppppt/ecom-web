import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';

const Login = ({ onLogin }) => {
  const [showLogin, setShowLogin] = useState(true);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
    setShowLogin(false);
    setShowForgotPassword(false);
  };

  const toggleForgotPassword = () => {
    setShowForgotPassword(!showForgotPassword);
    setShowLogin(false);
    setShowSignUp(false);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (username === "user@example.com" && password === "password") {
      if (onLogin) {
        onLogin(); // Notify parent component of successful login
      }
      navigate("/"); // Redirect to the homepage
    } else {
      alert("Invalid username or password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {showLogin && (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Login to EcomApp
          </h2>
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember-me"
                  className="h-4 w-4 text-blue-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Remember me
                </label>
              </div>
              <a
                href="#"
                className="text-sm text-blue-500 hover:underline"
                onClick={toggleForgotPassword}
              >
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-200 shadow-lg"
            >
              Login
            </button>
          </form>
          <p className="text-center text-sm text-gray-600 mt-4">
            Don't have an account?{" "}
            <a
              href="#"
              className="text-blue-500 hover:underline"
              onClick={toggleSignUp}
            >
              Sign up
            </a>
          </p>
        </div>
      )}

      {showSignUp && <SignUp />}
      {showForgotPassword && <ForgotPassword />}
    </div>
  );
};

export default Login;
