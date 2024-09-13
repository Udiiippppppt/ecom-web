import React from 'react';

export default function Thought() {
  return (
    <div
      className="p-8 rounded-lg bg-gray-300 shadow-lg w-full mt-8 border-7 border-black-300"
      style={{
        borderWidth: '7px',
        borderColor: '#000',
        // backgroundColor: '#f3f4f6',
      }}
    >
      <h1 className="text-5xl font-semibold text-center text-gray-900 mb-4">
        <span style={{ 
          background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Experience the Best with EcomApp
        </span>
      </h1>
      <p className="text-center text-gray-700 text-2xl">
        Welcome to our company! We are dedicated to providing the best services and products to our customers. Your satisfaction is our priority.
      </p>
    </div>
  );
}
