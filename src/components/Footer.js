import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Left Section (EcomApp) */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">EcomApp</h2>
          <p className="text-sm mb-4">
            Your favorite online store for all your shopping needs.
          </p>
        </div>

        {/* Middle Section (Contact Us) */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <div className="text-sm space-y-2">
            <p>
              <span className="font-medium">Email:</span>{' '}
              <a href="mailto:contact@ecomapp.com" className="hover:underline">
                contact@ecomapp.com
              </a>
            </p>
            <p>
              <span className="font-medium">Phone:</span>{' '}
              <a href="tel:+11234567890" className="hover:underline">
                +1-123-456-7890
              </a>
            </p>
            <p>
              <span className="font-medium">Address:</span> 1234 Ecom Street, City, Country
            </p>
          </div>
        </div>

        {/* Right Section (Follow Us) */}
        <div className="text-center md:text-right">
          <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
          <div className="flex justify-center space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section (Copyright) */}
      <div className="text-center mt-8">
        <p className="text-sm">&copy; 2023 EcomApp. All rights reserved.</p>
      </div>
    </footer>
  );
}
