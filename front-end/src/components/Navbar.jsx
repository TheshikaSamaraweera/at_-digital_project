import React, { useState } from 'react';
import logo from '../assets/Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav class="bg-violet-700 border-bg-violet-700 dark:bg-gray-900">
      <div class="flex flex-wrap  justify-between mx-auto p-5">
        
      <div class="float-left">
          <img src={logo} alt="AtDigital_logo" className="w-32 float-left" />
        </div>
          
        
        <button onClick={() => setIsOpen(!isOpen)} type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-expanded={isOpen ? 'true' : 'false'}>
          
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div class={`w-full md:block md:w-auto ${isOpen ? 'block' : 'hidden'}`} id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-bg-violet-700 rounded-lg bg-violet-700 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-violer-700 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#" class="block py-2 px-3 text-sm text-white rounded md:bg-transparent md: text-white md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">HOME</a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 text-sm text-white  hover:text-black md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">SERVICE</a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 text-sm text-white  hover:text-black md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">ABOUT US</a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 text-sm text-white  hover:text-black md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">CONTACT US</a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 text-sm text-white  hover:text-black md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">CAREERS</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
