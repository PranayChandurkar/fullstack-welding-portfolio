import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-300 border-t border-zinc-800 py-16 px-6 md:px-20 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand Section */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <img
              className="h-10 w-10 rounded-full"
              src="https://imgs.search.brave.com/BAq5xttdV3CggAlkrBA3NWQAiz2Sd9x1XanMNqHhcWY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvNS9Qcm9m/aWxlLVBORy1GaWxl/LnBuZw"
              alt="Logo"
            />
            <span className="font-bold text-xl text-white tracking-tight">Sarswati Works</span>
          </div>
          <p className="text-zinc-400 max-w-sm mb-6">
            Providing premium quality iron works and welding services. Dedicated to craftsmanship, strength, and elegant design.
          </p>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-white text-lg font-bold mb-6 tracking-wide">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/iron-doors" className="hover:text-blue-400 transition-colors inline-block">Iron Doors</Link>
            </li>
            <li>
              <Link to="/iron-windows" className="hover:text-blue-400 transition-colors inline-block">Iron Windows</Link>
            </li>
            <li>
              <Link to="/iron-stairs" className="hover:text-blue-400 transition-colors inline-block">Iron Stairs</Link>
            </li>
            <li>
              <Link to="/iron-shades" className="hover:text-blue-400 transition-colors inline-block">Iron Shades</Link>
            </li>
            <li className="pt-2">
              <Link to="/service-enquiry" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">Submit Service Enquiry &rarr;</Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-white text-lg font-bold mb-6 tracking-wide">Contact Us</h3>
          <div className="space-y-4">
            <p className="flex items-start gap-3">
              <svg className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <span>
                prathameshawaghad@gmail.com<br/>
                <span className="text-xs text-zinc-500 mt-1 block">Please use the Service Enquiry page for work requests.</span>
              </span>
            </p>
            <p className="flex items-center gap-3">
              <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              <span className="font-mono tracking-wider">+91 98906 79833</span>
            </p>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="mt-16 pt-8 border-t border-zinc-800 text-center text-sm text-zinc-500">
        <p>&copy; {new Date().getFullYear()} Sarswati Welding Works. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
