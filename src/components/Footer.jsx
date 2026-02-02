import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 mt-32 py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">KREWSTAR</h2>
          <p className="text-gray-500 max-w-xs">Building the future of talent, one pixel at a time.</p>
        </div>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-white uppercase">Site</h3>
            <Link to="/" className="text-gray-500 hover:text-white text-sm">Home</Link>
            <Link to="/about" className="text-gray-500 hover:text-white text-sm">About Us</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-white uppercase">More</h3>
            <Link to="/work" className="text-gray-500 hover:text-white text-sm">Work</Link>
            <Link to="/services" className="text-gray-500 hover:text-white text-sm">Services</Link>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto pt-12 text-gray-600 text-xs text-center md:text-left">
        © 2026 Krewstar. Rebuilt with React + Vite.
      </div>
    </footer>
  );
};

export default Footer;