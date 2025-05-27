import React from 'react';
import { Link } from 'react-router-dom';

const TopHeader = () => {
  return (
    <div className="bg-gray-400 text-white py-2 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-4 mb-2 sm:mb-0">
            <a href="tel:+911234567890" className="flex items-center hover:text-indigo-300 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 123 456 7890
            </a>
            <a href="mailto:info@sarojcollege.edu.in" className="flex items-center hover:text-indigo-300 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@sarojcollege.edu.in
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/privacy-policy" className="hover:text-indigo-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-indigo-300 transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;