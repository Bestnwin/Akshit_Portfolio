import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[80%] bg-black/90 text-white rounded-3xl shadow-lg flex items-center justify-between px-8 py-3 z-50 backdrop-blur-md">
      {/* Logo / Name */}
      <div className="text-xl font-semibold tracking-wide">
        Akshit<span className="text-blue-400">.</span>
      </div>

      {/* Center Nav Links */}
      <ul className="hidden md:flex space-x-10 text-sm font-medium">
        <li className="hover:text-blue-400 cursor-pointer transition">Home</li>
        <li className="hover:text-blue-400 cursor-pointer transition">About</li>
        <li className="hover:text-blue-400 cursor-pointer transition">Skills</li>
        <li className="hover:text-blue-400 cursor-pointer transition">Projects</li>
        <li className="hover:text-blue-400 cursor-pointer transition">Contact</li>
      </ul>

      {/* Right Button */}
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-4 bg-transparent border border-blue-400 text-blue-400 px-5 py-1.5 rounded-full text-sm hover:bg-blue-400 hover:text-black transition-all duration-300"
      >
        Resume
      </a>
    </nav>
  );
};

export default Navbar;
