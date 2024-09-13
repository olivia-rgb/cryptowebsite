import React, { useState, useEffect } from 'react';
import { RiMenu3Fill } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import bg from "../../img/clogo.png";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="font-bold text-white text-3xl md:text-2xl ">
      {/* Desktop Navbar */}
      <div className={`fixed top-0 left-0 w-full ${scrolling ? 'bg-green-900 shadow-2xl' : 'bg-transparent shadow-lg'} transition-all duration-300 z-50`}>
        <div className="hidden md:flex justify-between items-center w-10/12 mx-auto py-2">
          <div className="flex gap-8">
           <Link to="/home" className="hover:underline hover:text-[#f9a826]">Home</Link>
            <Link to="/about" className="hover:underline hover:text-[#f9a826]">About</Link>
            <Link to="/spot" className="hover:underline hover:text-[#f9a826]">Spot</Link>
            <Link to="/bot" className="hover:underline hover:text-[#f9a826]">AI Bots</Link>
            <Link to="/p2p" className="hover:underline hover:text-[#f9a826]">P2P</Link>
            <Link to="/contact" className="hover:underline hover:text-[#f9a826]">Contact</Link>
          </div>
          <img src={bg} alt="logo" className="w-20 mx-auto" />
          <div className="flex gap-8">
            <button className="bg-green-700 rounded-md border border-green-500 text-white px-4 py-1">Trade History</button>
            <button className="bg-green-700 rounded-md border border-green-500 text-white px-4 py-1">Wallet</button>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden fixed top-0 left-0 w-full h-20 bg-green-900 text-white shadow-md z-50 py-2">
        <div className="flex justify-between items-center px-4">
          <img src={bg} alt="logo" className="w-20" />
          <button onClick={toggleMenu} className="text-5xl font-bold focus:outline-none">
            {showMenu ? <FaTimes /> : <RiMenu3Fill />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {showMenu && (
        <div className="md:hidden fixed inset-0  bg-green-900 text-white font-bold flex flex-col py-32 items-start px-8 z-40 overflow-auto">
          <Link to="/home" className="hover:underline p-4 hover:text-[#f9a826]">Home</Link>
          <Link to="/about" className="text-center p-4 hover:underline">About</Link>
          <Link to="/spot" className="text-center p-4 hover:underline">Spot</Link>
          <Link to="/bot" className="text-center p-4 hover:underline">AI Bots</Link>
          <Link to="/p2p" className="text-center p-4 hover:underline">P2P</Link>
          <Link to="/contact" className="text-center p-4 hover:underline">Contact</Link>
          
        </div>
      )}
    </div>
  );
}

export default Navbar;
