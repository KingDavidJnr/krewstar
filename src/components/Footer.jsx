import { Link } from "react-router-dom";
import { Linkedin, Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  const socials = [
    { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/company/krewstar/" },
    { icon: <Instagram size={20} />, url: "https://www.instagram.com/krewstarstudio/" },
    { icon: <Facebook size={20} />, url: "https://web.facebook.com/profile.php?id=100066563585097" },
    { icon: <Youtube size={20} />, url: "https://www.youtube.com/@Krewstarstudio" },
  ];

  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-20">
          
          <div className="space-y-8">
            {/* LOGO REPLACEMENT */}
            <Link to="/" className="inline-block">
              <img 
                src="/Krewstar.svg" 
                alt="Krewstar Logo" 
                className="h-8 w-auto object-contain brightness-0 invert" 
              />
            </Link>

            <p className="text-gray-500 max-w-xs text-sm leading-relaxed font-sans">
              Creating commercials and campaigns that deliver real business impact.
            </p>

            {/* Social Icons */}
            <div className="flex gap-5">
              {socials.map((social, i) => (
                <a 
                  key={i} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#d58e42] transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-20">
            <div className="flex flex-col gap-4 font-sans">
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">Site</h4>
              <Link to="/" className="text-sm hover:text-[#d58e42] transition-colors">Home</Link>
              <Link to="/about" className="text-sm hover:text-[#d58e42] transition-colors">About Us</Link>
              <Link to="/contact" className="text-sm hover:text-[#d58e42] transition-colors">Contact</Link>
            </div>
            <div className="flex flex-col gap-4 font-sans">
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">Work</h4>
              <Link to="/work" className="text-sm hover:text-[#d58e42] transition-colors">Projects</Link>
              <Link to="/services" className="text-sm hover:text-[#d58e42] transition-colors">Services</Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 text-[10px] text-gray-600 uppercase tracking-widest font-sans">
          <p>© {new Date().getFullYear()} KREWSTAR STUDIO. ALL RIGHTS RESERVED.</p>
          <p className="mt-4 md:mt-0">
            Built by{" "}
            <a 
              href="https://divstack.com.ng" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#d58e42] transition-colors underline decoration-dotted underline-offset-4"
            >
              Divstack Systems Limited
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;