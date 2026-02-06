import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";

const Home = () => {
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
      <main className="bg-[#0a0a0a] text-white w-full overflow-hidden">
        
        {/* 1. Main Top Video */}
        <section className="w-full pt-32 pb-10 px-6 bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="w-full aspect-video bg-white/5 rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
              <video autoPlay muted loop playsInline controls className="w-full h-full object-cover">
                <source src="https://res.cloudinary.com/dvbqxhkh6/video/upload/v1770338086/home_page_video_Krewstar_r7p99t.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        {/* 2. White Section: Headline + Learn More */}
        <section className="w-full bg-white text-black py-32 px-6">
          <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[14vw] font-[1000] tracking-tighter leading-[0.8] uppercase mb-10"
            >
              WE ARE KREWSTAR
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xl md:text-3xl text-gray-600 max-w-3xl mx-auto font-medium leading-tight mb-12"
            >
              A production partner and creative agency that creates 
              commercials and campaigns that deliver real business impact.
            </motion.p>
            
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                <Link to="/about" className="px-12 py-4 bg-black text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[#d58e42] transition-colors">
                  Learn More
                </Link>
            </motion.div>
          </div>
        </section>

        {/* 3. 6 YouTube Videos Grid (RECTIFIED CONTROLS) */}
        <section className="px-6 py-32 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {youtubeWorks.map((work, index) => (
              <div key={index} className="aspect-video bg-white/5 rounded-[32px] overflow-hidden border border-white/10 relative group">
                {/* POINTER EVENTS FIX: 
                  The iframe is "untouchable" by the mouse until the user hovers over the group.
                  This keeps the YouTube UI from popping up on page load.
                */}
                <iframe
                  className="w-full h-full object-cover pointer-events-none group-hover:pointer-events-auto transition-transform duration-700 group-hover:scale-105"
                  src={`https://www.youtube.com/embed/${work.id}?autoplay=1&mute=1&loop=1&playlist=${work.id}&controls=1&modestbranding=1&rel=0`}
                  title={work.title}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
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
    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none uppercase text-[#d58e42]">
      Brands that have <br /> trusted us
    </h2>
    <a 
      href="mailto:contact@krewstar.com" 
      className="px-8 py-4 bg-[#d58e42] text-black rounded-full font-bold text-sm uppercase hover:bg-white transition-all"
    >
      BECOME A KREWSTAR CLIENT
    </a>
  </div>

  {/* 4 on each row (md:grid-cols-4) with a total of 16 placeholders */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-16 items-center">
    {Array.from({ length: 16 }).map((_, i) => (
      <div 
        key={i} 
        className="w-full h-20 flex items-center justify-center border border-white/5 bg-white/[0.03] rounded-xl relative overflow-hidden group"
      >
        {/* Placeholder text visible until you add the image */}
        <span className="absolute text-[10px] text-white/10 uppercase tracking-widest font-bold group-hover:text-white/20 transition-colors">
          Brand {i + 1}
        </span>
        
        {/* The Actual Logo 
            Styled with grayscale and invert to force dark logos to show as white.
            h-10 ensures they stay consistent in height.
        */}
        <img 
          src={`/logos/brand-${i + 1}.png`} 
          alt={`Brand logo ${i + 1}`} 
          className="h-10 w-auto object-contain relative z-10 grayscale invert brightness-200"
          onError={(e) => { e.target.style.opacity = '0'; }} // Hides broken image icon if file is missing
        />
      </div>
    ))}
  </div>
</section>

        {/* 6. Numbers & Facts (White Section) */}
        <section className="bg-white text-black py-40 px-6">
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
                <p className="text-xs uppercase tracking-[0.4em] font-black mt-4 text-gray-400">{stat.l}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Our Approach */}
        <section className="py-40 px-6 max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-[100px] font-bold tracking-tighter mb-12 uppercase leading-none text-[#d58e42]">Our Approach</h2>
          <p className="text-xl md:text-3xl text-gray-500 leading-relaxed font-light">
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
              <span key={i} className="text-7xl md:text-[120px] font-black uppercase tracking-tighter outline-text">
                {item}
              </span>
            ))}
          </motion.div>
        </section>

        {/* 9. Giant Talk to Us */}
        <section className="py-60 px-6 flex justify-center items-center">
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

export default Home;