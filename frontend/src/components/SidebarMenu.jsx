import React, { useState } from 'react';
import { FaChevronDown, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SidebarMenu = ({ isOpen, onClose }) => {
  const [showServices, setShowServices] = useState(false);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-zinc-950 text-white p-6 shadow-2xl z-50 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-zinc-800">
          <h2 className="text-xl font-bold tracking-wide">Menu</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-zinc-800 transition-colors"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="space-y-6">
          <div className="text-lg font-medium cursor-pointer hover:text-blue-400 transition-colors">
            <Link to={"/"} onClick={onClose}>Home</Link>
          </div>
          <div className="text-lg font-medium cursor-pointer hover:text-blue-400 transition-colors">
            <Link to={"/service-enquiry"} onClick={onClose}>Service Enquiry</Link>
          </div>

          {/* Dropdown */}
          <div>
            <div
              className="flex justify-between items-center text-lg font-medium cursor-pointer hover:text-blue-400 transition-colors select-none"
              onClick={() => setShowServices(!showServices)}
            >
              <span>Our Services</span>
              <FaChevronDown className={`transform transition-transform duration-300 ${showServices ? 'rotate-180' : ''}`} />
            </div>

            {/* Dropdown Items with animation */}
            <div className={`overflow-hidden transition-all duration-300 ${showServices ? 'max-h-48 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
              <ul className="ml-4 space-y-3 text-base text-zinc-400 border-l-2 border-zinc-800 pl-4">
                <li className="hover:text-blue-400 transition-colors cursor-pointer">
                  <Link to="/iron-doors" onClick={onClose}>Iron Doors</Link>
                </li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">
                  <Link to="/iron-windows" onClick={onClose}>Iron Windows</Link>
                </li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">
                  <Link to="/iron-stairs" onClick={onClose}>Iron Stairs</Link>
                </li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">
                  <Link to="/iron-shades" onClick={onClose}>Iron Shades</Link>
                </li>
              </ul>
            </div>
          </div>
          
          {import.meta.env.DEV && (
            <div className="pt-6 mt-6 border-t border-zinc-800">
              <Link 
                to={"/login"} 
                onClick={onClose}
                className="flex justify-center w-full font-medium px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SidebarMenu;
