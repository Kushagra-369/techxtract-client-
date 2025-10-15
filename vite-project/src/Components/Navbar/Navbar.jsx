import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import image1 from '../../assets/images/image1.jpg';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const data = [
    { name: "Home", link: "/" },
    { name: "Team", link: "/team" },
    { name: "About Us", link: "/about" },
    { name: "Contact Us", link: "/contact" },
  ];

  return (
    <AnimatePresence>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="bg-gray-900 px-5 py-4 flex flex-col sm:flex-row items-center justify-between fixed w-full top-0 z-50 shadow-lg"
      >

        {/* Top Row: Logo + Text + Hamburger */}
        <div className="flex items-center justify-between w-full sm:w-auto relative">
          {/* Logo + Text */}
          <div className="flex items-center gap-3 mx-auto sm:mx-0">
            <img src={image1} alt="Logo" className="w-14 h-14 rounded-full" />
            <div className="flex items-center gap-1 text-white font-bold" style={{ fontFamily: 'Pacifico' }}>
              <h1 className="text-2xl sm:text-3xl">TECH</h1>
              <h1 className="text-4xl sm:text-5xl text-red-500">X</h1>
              <h1 className="text-2xl sm:text-3xl">TRACT</h1>
            </div>
          </div>

          {/* Hamburger Button (Mobile) */}
          <button
            className="text-white text-3xl sm:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* Mobile Dropdown Menu */}
          {menuOpen && (
            <div className="absolute top-full right-0 mt-2 bg-gray-900 border border-cyan-400 rounded-lg shadow-lg flex flex-col w-40 z-50">
              {data.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  className="text-white px-4 py-2 hover:bg-cyan-400 hover:text-black font-semibold border-b border-gray-700 last:border-b-0"
                  onClick={() => setMenuOpen(false)} // close menu on click
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Optional subtitle */}
        <div className='text-white hover:text-cyan-400 text-xl font-bold text-center mt-2 sm:mt-0'
             style={{ fontFamily: 'Pacifico' }}
        >
          <h1>(Official Tech Society of CST Department)</h1>
          <h1>Grow And Learn</h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden sm:flex flex-row items-center space-x-6 mt-2 sm:mt-0">
          {data.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="text-white text-lg font-semibold hover:text-cyan-400"
            >
              {item.name}
            </Link>
          ))}
        </div>

      </motion.nav>
    </AnimatePresence>
  );
}
