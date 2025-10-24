import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <motion.nav
      className="fixed top-0 w-full bg-black/40 backdrop-blur-xl border-b border-gray-800 z-50"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-cyan-400 tracking-wide">
          Akshit<span className="text-gray-300">.dev</span>
        </h1>

        <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-cyan-400 transition duration-300"
            >
              {link}
            </a>
          ))}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="text-white text-2xl md:hidden"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black/90 text-center py-3 space-y-2 border-t border-gray-800">
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block py-2 text-gray-300 hover:text-cyan-400"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
