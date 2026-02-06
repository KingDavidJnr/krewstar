import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "../components/PageTransition";

const Work = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Video Production", "Motion Design", "Brand Identity", "Product Design", "3D Design"];

  const projects = [
    { title: "Legacy In Motion | Omon Odike @50", type: "video", id: "DuGYKtzl9AE", category: "Video Production" },
    { title: "Switch United VS Trap FC", type: "video", id: "L1AIUU29KNI", category: "Motion Design" },
    { title: "Spotify Premium All Four One", type: "video", id: "WgLZYM5kv0A", category: "Video Production" },
    { title: "Quickteller Transport", type: "video", id: "-Z-V_O5-HAg", category: "Motion Design" },
    { title: "Sporty Fanz", type: "image", url: "https://res.cloudinary.com/dvbqxhkh6/image/upload/v1770343131/sporty_fans_soadwj.png", category: "Product Design" },
    { title: "Ingenium Behind the Scenes", type: "video", id: "YdEBMe-DF8o", category: "Video Production" },
    { title: "Edge Rhythm", type: "image", url: "https://res.cloudinary.com/dvbqxhkh6/image/upload/v1770343253/edge_rythm_bwzvsq.png", category: "Brand Identity" },
    { title: "TVS HLX - Christmas", type: "video", id: "0wJMQrqGT4I", category: "Video Production" },
    { title: "Anakle Films", type: "image", url: "https://res.cloudinary.com/dvbqxhkh6/image/upload/v1770343365/anakle_films_o4sxba.png", category: "Product Design" },
    { title: "Paypal", type: "video", id: "-G6OgGf0AS0", category: "Motion Design" },
    { title: "7UP", type: "video", id: "6ue0CSbTNhk", category: "3D Design" },
    { title: "Interswitch Never S20P", type: "video", id: "yjgo7mYMHWE", category: "Video Production" },
    { title: "Billboard Lagos", type: "video", id: "03g4LeBaQ38", category: "3D Design" },
    { title: "Vickery Falls", type: "image", url: "https://res.cloudinary.com/dvbqxhkh6/image/upload/v1770343597/vickery_falls_me38qn.png", category: "Brand Identity" },
    { title: "Vervelife 7.0", type: "video", id: "VD2zxbl7oBM", category: "Video Production" },
    { title: "Quickteller Bot", type: "video", id: "xiyzC-vedT0", category: "Motion Design" },
    { title: "Rova Cove", type: "image", url: "https://res.cloudinary.com/dvbqxhkh6/image/upload/v1770343704/xQcvgcy1VypzEFKCSeq70zWlAA_avqosk.png", category: "Brand Identity" },
    { title: "Red Pay", type: "image", url: "https://res.cloudinary.com/dvbqxhkh6/image/upload/v1770343760/Red_Pay_gvgi39.png", category: "Product Design" },
    { title: "Quickteller Loan", type: "video", id: "GSp6Cv8KlNU", category: "Motion Design" },
  ];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <PageTransition>
      <main className="w-full bg-black text-white overflow-hidden">
        
        {/* SECTION 1: Manifesto (Black BG) */}
        <section className="pt-48 pb-24 px-6 max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none mb-10"
          >
            Made with Love, <br />
            <span className="text-gray-500">Designed for Impact</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-400 max-w-4xl leading-relaxed"
          >
            Our manifesto is not to create. It is to solve problems by meeting real business objectives and delivering results. From commercials that drive growth to campaigns that secure brand leadership. Our work speaks for itself.
          </motion.p>
        </section>

        {/* SECTION 2: Works Grid & Filtering */}
        <section className="px-6 py-20 max-w-7xl mx-auto">
          
          {/* Categories Filter Bar */}
          <div className="flex flex-wrap gap-4 md:gap-8 mb-20 border-b border-white/10 pb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-sm uppercase tracking-widest font-bold transition-all ${
                  filter === cat ? "text-[#d58e42]" : "text-gray-500 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid (2 per row) */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col gap-6 group"
                >
                  <div className="w-full aspect-video rounded-[32px] overflow-hidden border border-white/10 bg-white/5 relative">
                    {project.type === "video" ? (
                      <>
                        <div className="absolute inset-0 z-10 bg-transparent group-hover:pointer-events-none" />
                        <iframe
                          className="w-full h-full object-cover pointer-events-none group-hover:pointer-events-auto transition-transform duration-700 group-hover:scale-105"
                          src={`https://www.youtube.com/embed/${project.id}?autoplay=1&mute=1&loop=1&playlist=${project.id}&controls=1&modestbranding=1`}
                          title={project.title}
                          allow="autoplay; encrypted-media"
                          allowFullScreen
                        ></iframe>
                      </>
                    ) : (
                      <img 
                        src={project.url} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                  </div>
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight uppercase leading-tight max-w-[80%]">
                      {project.title}
                    </h3>
                    <span className="text-[10px] uppercase tracking-widest text-gray-500 mt-2 font-bold">
                      {project.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* Talk to Us Section */}
        <section className="py-60 px-6 flex justify-center items-center border-t border-white/5">
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

export default Work;