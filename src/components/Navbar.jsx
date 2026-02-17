import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const isHomePage = location.pathname === "/";
  const [isVisible, setIsVisible] = useState(!isHomePage);

  useEffect(() => {
    if (!isHomePage) {
      setIsVisible(true);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage, location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Work", path: "/work" },
    { name: "Services", path: "/services" },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={isHomePage ? { y: -100, x: "-50%", opacity: 0 } : false}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
          exit={{ y: -100, x: "-50%", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed top-6 left-1/2 z-[100] w-[92%] max-w-4xl"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-full flex justify-between items-center shadow-2xl relative z-10">
            {/* LOGO REPLACEMENT HERE */}
            <Link 
              to="/" 
              onClick={() => setIsOpen(false)}
              className="flex items-center"
            >
              <img 
                src="/Krewstar.svg" 
                alt="Krewstar Logo" 
                className="h-6 md:h-8 w-auto object-contain brightness-0 invert" 
              />
            </Link>
            
            <div className="hidden md:flex gap-8 items-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === link.path ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
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

            <button 
              className="md:hidden text-white p-1"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

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
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;