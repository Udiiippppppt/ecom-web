import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faHeadset, faStar, faShippingFast, faUndo, faTag } from '@fortawesome/free-solid-svg-icons';

export default function Service() {
  return (
    <div className="container mx-auto px-4 py-8 bg-yellow-50 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Our Services</h1>
      <p className="text-lg text-center mb-8 text-gray-600">
        At EcomApp, we offer a wide range of services to meet all your shopping needs.
        Whether you're looking for the latest products, customer support, or personalized recommendations, 
        our team is here to help.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
          <FontAwesomeIcon icon={faBoxOpen} className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Wide Range of Products</h3>
          <p className="text-gray-600 text-center">
            Explore a vast collection of items across various categories to find exactly what you need.
          </p>
        </div>
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
          <FontAwesomeIcon icon={faHeadset} className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">24/7 Customer Support</h3>
          <p className="text-gray-600 text-center">
            Our dedicated support team is available around the clock to assist you with any inquiries.
          </p>
        </div>
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
          <FontAwesomeIcon icon={faStar} className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Personalized Recommendations</h3>
          <p className="text-gray-600 text-center">
            Get tailored product suggestions based on your preferences and shopping history.
          </p>
        </div>
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
          <FontAwesomeIcon icon={faShippingFast} className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Fast and Reliable Shipping</h3>
          <p className="text-gray-600 text-center">
            Enjoy swift delivery services that ensure your orders arrive on time, every time.
          </p>
        </div>
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
          <FontAwesomeIcon icon={faUndo} className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Easy Returns and Exchanges</h3>
          <p className="text-gray-600 text-center">
            Benefit from hassle-free returns and exchanges for a seamless shopping experience.
          </p>
        </div>
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
          <FontAwesomeIcon icon={faTag} className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Exclusive Deals</h3>
          <p className="text-gray-600 text-center">
            Access special offers and discounts available only to our registered users.
          </p>
        </div>
      </div>
    </div>
  );
}
