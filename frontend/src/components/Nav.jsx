import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { Menu } from 'lucide-react';
import SidebarMenu from './SidebarMenu';

const Nav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled || location.pathname !== '/' 
            ? 'bg-zinc-950/90 backdrop-blur-lg shadow-lg py-3' 
            : 'bg-transparent py-5'
        } px-6 md:px-20 lg:px-24 flex justify-between items-center`}
      >
        <Link to="/" className="flex items-center gap-3 group">
          <img
            className="h-10 w-10 md:h-12 md:w-12 rounded border-2 border-transparent group-hover:border-blue-500 transition-colors shadow-lg"
            src="/logo.png"
            alt="Logo"
          />
          <span className={`font-bold text-xl tracking-tight hidden sm:block ${scrolled || location.pathname !== '/' ? 'text-white' : 'text-white drop-shadow-md'}`}>
            Sarswati <span className="text-blue-500">Works</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center">
          <ul className="flex items-center gap-8">
            <li>
              <Link 
                to={"/"} 
                className={`font-medium transition-colors hover:text-blue-400 ${scrolled || location.pathname !== '/' ? 'text-zinc-200' : 'text-white drop-shadow-md'}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to={"/service-enquiry"} 
                className={`font-medium transition-colors hover:text-blue-400 ${scrolled || location.pathname !== '/' ? 'text-zinc-200' : 'text-white drop-shadow-md'}`}
              >
                Enquiry
              </Link>
            </li>
            {import.meta.env.DEV && (
              <li>
                <Link 
                  to={"/login"} 
                  className="font-medium px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>

        <div className="block md:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className={`p-2 rounded-lg transition-colors ${scrolled || location.pathname !== '/' ? 'text-white hover:bg-zinc-800' : 'text-white hover:bg-black/20'}`}
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <SidebarMenu isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
};

export default Nav;
