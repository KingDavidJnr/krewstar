import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Instagram, Facebook, Youtube, CheckCircle2 } from "lucide-react";
import PageTransition from "../components/PageTransition";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const socials = [
    { icon: <Linkedin size={24} />, url: "https://www.linkedin.com/company/krewstar/" },
    { icon: <Instagram size={24} />, url: "https://www.instagram.com/krewstarstudio/" },
    { icon: <Facebook size={24} />, url: "https://web.facebook.com/profile.php?id=100066563585097" },
    { icon: <Youtube size={24} />, url: "https://www.youtube.com/@Krewstarstudio" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation is handled by HTML5 'required' attributes in the JSX below
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    
    // Clear the success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <PageTransition>
      <main className="w-full bg-black text-white overflow-hidden">
        
        {/* SECTION 1: Header */}
        <section className="pt-48 pb-20 px-6 max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-3xl text-gray-400 font-medium max-w-3xl mx-auto"
          >
            Let’s turn your big idea into great results
          </motion.p>
        </section>

        {/* SECTION 2: Contact Form */}
        <section className="px-6 pb-32 max-w-3xl mx-auto">
          <AnimatePresence>
            {isSubmitted && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mb-8 p-4 bg-green-500/10 border border-green-500/50 rounded-2xl flex items-center gap-3 text-green-500 font-bold justify-center"
              >
                <CheckCircle2 size={20} />
                Message sent successfully! We'll be in touch soon.
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-[#d58e42] outline-none transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-[#d58e42] outline-none transition-colors"
              />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone (Optional)"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-[#d58e42] outline-none transition-colors"
            />
            <textarea
              name="message"
              rows="6"
              placeholder="Enter your message"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-[#d58e42] outline-none transition-colors resize-none"
            ></textarea>
            
            <button 
              type="submit"
              className="w-full py-5 bg-white text-black rounded-full font-bold uppercase tracking-widest hover:bg-[#d58e42] transition-colors"
            >
              Send Message
            </button>
          </form>

          {/* SECTION 3: Direct Contact Info */}
          <div className="mt-32 pt-20 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500 mb-4 font-bold">Email</p>
              <a 
                href="mailto:contact@krewstar.com" 
                className="text-2xl md:text-3xl font-bold hover:text-[#d58e42] transition-colors"
              >
                contact@krewstar.com
              </a>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500 mb-4 font-bold">Phone</p>
              <a 
                href="tel:+2348151899007" 
                className="text-2xl md:text-3xl font-bold hover:text-[#d58e42] transition-colors"
              >
                +234 815 189 9007
              </a>
            </div>
          </div>

          {/* SECTION 4: Social Icons */}
          <div className="mt-20 flex justify-center gap-8">
            {socials.map((social, i) => (
              <a 
                key={i} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 bg-white/5 rounded-full hover:bg-[#d58e42] hover:text-black transition-all"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </section>

        {/* SECTION 5: Talk to Us */}
        <section className="py-40 px-6 flex justify-center items-center border-t border-white/5">
          <a 
            href="mailto:contact@krewstar.com" 
            className="text-[16vw] font-black tracking-tighter leading-none uppercase transition-all duration-500 hover:text-[#d58e42] hover:italic"
          >
            TALK TO US
          </a>
        </section>

      </main>
    </PageTransition>
  );
};

export default Contact;