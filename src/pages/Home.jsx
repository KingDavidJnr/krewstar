import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { X, Play } from "lucide-react";
import PageTransition from "../components/PageTransition";

const Home = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // 16 Logo Placeholders
  const logos = Array.from({ length: 16 }, (_, i) => `/logos/brand-${i + 1}.png`);
  
  const sliderItems = ["Graphic Design", "Production", "Commercials", "Campaigns", "Branding", "Strategy"];

  const youtubeWorks = [
    { title: "Paypal work", id: "-G6OgGf0AS0" },
    { title: "Experience the Magic", id: "0wJMQrqGT4I" },
    { title: "Interswitch Never Stop", id: "yjgo7mYMHWE" },
    { title: "Quickteller Bot", id: "xiyzC-vedT0" },
    { title: "Quickteller Loan", id: "GSp6Cv8KlNU" },
    { title: "Paypal Shopping", id: "-G6OgGf0AS0" },
  ];

  return (
    <PageTransition>
      <main className="bg-[#0a0a0a] text-white w-full overflow-hidden font-sans">
        
        {/* 1. Main Top Video - Full Screen Hero */}
        <section className="w-full h-screen bg-black relative">
          <video autoPlay muted loop playsInline controls className="w-full h-full object-cover">
            <source src="https://res.cloudinary.com/dvbqxhkh6/video/upload/v1770338086/home_page_video_Krewstar_r7p99t.mp4" type="video/mp4" />
          </video>
        </section>

        {/* 2. White Section: Headline + Learn More */}
<section className="w-full bg-white text-black py-40 px-6">
  <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
    
    {/* Main Headline: "We are [Logo]" */}
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-row items-center justify-center gap-3 md:gap-5 mb-10"
    >
      <h2 className="text-[10vw] md:text-[7.5vw] font-bold tracking-tighter leading-none">
        We are
      </h2>
      <img 
        src="/Krewstar.svg" 
        alt="krewstar" 
        className="h-[8vw] md:h-[6vw] w-auto object-contain" 
        // Note: No 'brightness-0 invert' here so it remains black
      />
    </motion.div>

    {/* Sub-headline */}
    <motion.p 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="text-lg md:text-2xl text-gray-800 max-w-3xl mx-auto font-medium leading-tight mb-14 px-4"
    >
      A production partner and creative agency that creates <br className="hidden md:block" />
      commercials and campaigns that deliver real business impact.
    </motion.p>
    
    {/* Learn More Button */}
    <motion.div 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ delay: 0.4 }}
    >
        <Link 
          to="/about" 
          className="px-10 py-3 border border-[#d58e42] text-black rounded-full font-bold text-sm hover:bg-[#d58e42] hover:text-white transition-all duration-300"
        >
          Learn More
        </Link>
    </motion.div>

    {/* Decorative Vertical Line (Seen in the reference image) */}
    <motion.div 
      initial={{ height: 0 }}
      whileInView={{ height: 80 }}
      className="w-[1px] bg-gray-200 mt-20"
    />
  </div>
</section>

        {/* 3. 6 YouTube Videos Grid - Lightbox Logic Integrated */}
        <section className="px-6 py-32 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {youtubeWorks.map((work, index) => (
              <div 
                key={index} 
                className="aspect-video bg-white/5 rounded-[32px] overflow-hidden border border-white/10 relative group cursor-pointer"
                onClick={() => setSelectedVideo(work.id)}
              >
                {/* 4-Second Teaser Preview (No UI) */}
                <iframe
                  className="w-full h-full object-cover pointer-events-none scale-110"
                  src={`https://www.youtube.com/embed/${work.id}?autoplay=1&mute=1&loop=1&playlist=${work.id}&controls=0&modestbranding=1&start=15&end=19`}
                  title={work.title}
                  allow="autoplay; encrypted-media"
                ></iframe>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all flex items-center justify-center">
                   <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100">
                      <Play fill="white" size={24} />
                   </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-20">
            <Link to="/work" className="px-12 py-5 border-[1.5px] border-white rounded-full text-sm font-bold tracking-widest hover:bg-white hover:text-black transition-all">
              SEE MORE WORKS
            </Link>
          </div>
        </section>

        {/* 5. Brands Section */}
        <section className="px-6 py-32 max-w-7xl mx-auto border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none uppercase text-[#d58e42] font-header">
              Brands that have <br /> trusted us
            </h2>
            <a 
              href="mailto:contact@krewstar.com" 
              className="px-8 py-4 bg-[#d58e42] text-black rounded-full font-bold text-sm uppercase hover:bg-white transition-all"
            >
              BECOME A KREWSTAR CLIENT
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-16 items-center">
            {logos.map((logoPath, i) => (
              <div 
                key={i} 
                className="w-full h-20 flex items-center justify-center border border-white/5 bg-white/[0.03] rounded-xl relative overflow-hidden"
              >
                <img 
                  src={logoPath} 
                  alt={`Brand logo ${i + 1}`} 
                  className="h-10 w-auto object-contain relative z-10 grayscale invert brightness-200"
                  onError={(e) => { e.target.style.opacity = '0'; }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* 6. Numbers & Facts (White Section) */}
        <section className="bg-white text-black py-40 px-6 font-header">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            {[
               { n: "2M+", l: "Views Across Africa" },
               { n: "15+", l: "Brands" },
               { n: "16k+", l: "Audience Reach" },
               { n: "100+", l: "Successful Projects" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <motion.h4 
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="text-7xl md:text-9xl font-black tracking-tighter"
                >
                  {stat.n}
                </motion.h4>
                <p className="text-xs uppercase tracking-[0.4em] font-black mt-4 text-gray-400 font-sans">{stat.l}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Our Approach */}
        <section className="py-40 px-6 max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-[100px] font-bold tracking-tighter mb-12 uppercase leading-none text-[#d58e42] font-header">Our Approach</h2>
          <p className="text-xl md:text-3xl text-gray-500 leading-relaxed font-light font-sans">
            Our approach is to understand what the goal of every project is (lead generation, sales, or awareness), understand who the target audience is, and work with client and agency partners to deliver the metrics that matter 
          </p>
        </section>

        {/* 8. Infinite Slider */}
        <section className="py-24 border-y border-white/5 overflow-hidden flex">
          <motion.div 
            animate={{ x: [0, -1500] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="flex gap-24 items-center whitespace-nowrap"
          >
            {[...sliderItems, ...sliderItems].map((item, i) => (
              <span key={i} className="text-7xl md:text-[120px] font-black uppercase tracking-tighter outline-text font-header">
                {item}
              </span>
            ))}
          </motion.div>
        </section>

        {/* 9. Giant Talk to Us */}
        <section className="py-60 px-6 flex justify-center items-center font-header">
          <a 
            href="mailto:contact@krewstar.com" 
            className="text-[16vw] font-black tracking-tighter leading-none uppercase transition-all duration-500 hover:text-[#d58e42] hover:italic"
          >
            TALK TO US
          </a>
        </section>

        {/* FULL SCREEN MODAL / LIGHTBOX */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 md:p-10 backdrop-blur-md"
              onClick={() => setSelectedVideo(null)}
            >
              <button className="absolute top-10 right-10 text-white z-[210] hover:text-[#d58e42] transition-colors">
                <X size={40} strokeWidth={1} />
              </button>
              
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&controls=1`}
                  title="Full Project Video"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </main>
    </PageTransition>
  );
};

export default Home;