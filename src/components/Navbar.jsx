import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // Make sure lucide-react is installed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Work", path: "/work" },
    { name: "Services", path: "/services" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[92%] max-w-4xl">
      {/* Main Navbar Bar */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-full flex justify-between items-center shadow-2xl relative z-10">
        <Link to="/" className="text-xl font-bold tracking-tighter" onClick={() => setIsOpen(false)}>
          KREWSTAR
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact">
  <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
    Contact
  </button>
</Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden text-white p-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-20 left-0 w-full bg-[#0d0d0d] border border-white/10 rounded-3xl p-6 shadow-3xl md:hidden flex flex-col gap-6 items-center"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="text-2xl font-medium text-white tracking-tight"
                onClick={() => setIsOpen(false)} // Closes menu on click
              >
                {link.name}
              </Link>
            ))}
            <button className="w-full bg-white text-black py-4 rounded-2xl font-bold mt-4">
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;