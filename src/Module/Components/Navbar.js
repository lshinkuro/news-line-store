import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Logo</div>
        <div className="flex space-x-4">
          <a href="#" className="text-white"><Link to="/">Home</Link></a>
          <a href="#" className="text-white"><Link to="/about">About</Link></a>
          <a href="#" className="text-white">Services</a>
          <a href="#" className="text-white"><Link to="/contact">Contact</Link></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
