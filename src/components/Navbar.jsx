import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false); // Tracks if we are over a white background
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;

      if (isHomePage) {
        // Logic to flip colors when over white sections
        // Section 2 (We Are Krewstar) is roughly between 100vh and 200vh
        // Section 6 (Numbers/Facts) is roughly between 450vh and 550vh
        const overWhiteSection = 
          (scrollY > vh - 80 && scrollY < vh * 2.1) || 
          (scrollY > vh * 4.4 && scrollY < vh * 5.6);
        
        setIsDark(overWhiteSection);
      } else {
        // Other pages are mostly dark, keep it light/white
        setIsDark(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Work", path: "/work" },
    { name: "Services", path: "/services" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[92%] max-w-4xl">
      {/* Main Navbar Bar */}
      <div className={`transition-all duration-500 px-6 py-4 rounded-full flex justify-between items-center relative z-10 
        ${isDark 
          ? "bg-black/5 backdrop-blur-xl border border-black/10 shadow-sm" 
          : "bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl"
        }`}
      >
        <Link 
          to="/" 
          onClick={() => setIsOpen(false)}
          className="flex items-center"
        >
          <img 
            src="/Krewstar.svg" 
            alt="Krewstar Logo" 
            className={`h-6 md:h-8 w-auto object-contain transition-all duration-500 ${
              isDark ? "brightness-0" : "brightness-0 invert"
            }`} 
          />
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`text-sm font-medium transition-colors duration-500 ${
                isDark 
                  ? (location.pathname === link.path ? "text-black" : "text-gray-600 hover:text-black") 
                  : (location.pathname === link.path ? "text-white" : "text-gray-400 hover:text-white")
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact">
            <button className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-500 
              ${isDark ? "bg-black text-white hover:bg-gray-800" : "bg-white text-black hover:bg-gray-200"}`}
            >
              Contact
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className={`md:hidden p-1 transition-colors duration-500 ${isDark ? "text-black" : "text-white"}`}
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
                className={`text-2xl font-medium tracking-tight ${
                  location.pathname === link.path ? "text-[#d58e42]" : "text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)} className="w-full">
              <button className="w-full bg-white text-black py-4 rounded-2xl font-bold mt-4">
                Contact Us
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;