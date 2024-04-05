import React, { useState } from 'react';
import logo from '../assets/Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-violet-700 py-6 px-14 relative">
      <div className="flex justify-between items-center">
        <img src={logo} alt="AtDigital_logo" className="w-32" />
        <div className="md:hidden">
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? (
              <i className="text-white fas fa-times"></i>
            ) : (
              <i className="text-white fas fa-bars"></i>
            )}
          </button>
        </div>
              <nav className={`hidden lg:block md:flex md:items-center ${isOpen ? 'block' : 'hidden'} mt-4 md:mt-0`}>
        <button className="text-white mx-6 nav-font">
          Services
        </button>
        <button className="text-white mx-6 nav-font">
          About Us
        </button>
        <button className="text-white mx-6 nav-font">
          Contact Us
        </button>
        <button className="text-white mx-6 nav-font">
          Careers
        </button>
      </nav>

      </div>
      {isOpen && (
        <nav className="lg:hidden flex flex-col items-center w-1/2 bg-white absolute top-12 right-3 z-10 p-4 m-2 rounded-lg shadow-lg">
          <button className="text-violet-700 lg:mx-2 py-2 hover:bg-violet-100 hover:text-violet-800">
            Services
          </button>
          <button className="text-violet-700 lg:mx-2 py-2 hover:bg-violet-100 hover:text-violet-800">
            About Us
          </button>
          <button className="text-violet-700 lg:mx-2 py-2 hover:bg-violet-100 hover:text-violet-800">
            Contact Us
          </button>
          <button className="text-violet-700 lg:mx-2 py-2 hover:bg-violet-100 hover:text-violet-800">
            Careers
          </button>
        </nav>
      )}


    </div>
  );
};

export default Navbar;
