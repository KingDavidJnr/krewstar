import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "../components/PageTransition";

const serviceData = [
  {
    title: "Commercials That Convert",
    subtitle: "High-impact advertising that captivates and drives real business results.",
    items: ["Video Production", "Animation", "Animation & Motion Graphics", "VFX & Post-Production"],
    video: "https://res.cloudinary.com/dvbqxhkh6/video/upload/v1770344890/Commercials_That_Convert_cok1xx.mp4"
  },
  {
    title: "Design That Delights Customers",
    subtitle: "Customer-centered and visually stunning digital experiences.",
    items: ["Product Design", "User Research & UX Strategy", "UI/UX Design", "Visual Identity & Branding"],
    video: "https://res.cloudinary.com/dvbqxhkh6/video/upload/v1770344815/Design_That_Delights_Customers_sdhixb.mp4"
  },
  {
    title: "Creative Strategy That Works",
    subtitle: "Ideas backed by data, built to achieve business goals.",
    items: ["Brand Strategy", "Brand Positioning & Messaging", "Go-To-Market Strategy", "Creative Concept Development"],
    video: "https://res.cloudinary.com/dvbqxhkh6/video/upload/v1770344771/Creative_Strategy_That_Works_udh4ti.mp4"
  },
  {
    title: "Engagement That Drives Action",
    subtitle: "Bringing brands to life through meaningful interactions.",
    items: ["Social Media Campaigns", "Brand Advertising", "Content Strategy & Development", "Copywriting & Messaging"],
    video: "https://res.cloudinary.com/dvbqxhkh6/video/upload/v1770344772/Engagement_That_Drives_Action_zqs3hh.mp4"
  }
];

const Services = () => {
  const [openIndex, setOpenIndex] = useState(0); // Set first item open by default

  return (
    <PageTransition>
      <main className="w-full bg-black text-white overflow-hidden">
        
        {/* SECTION 1: Intro (Black BG) */}
        <section className="pt-48 pb-32 px-6 max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-10 uppercase"
            >
              Turn Big Ideas <br />
              <span className="text-gray-500">Into Real Growth</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-3xl text-gray-400 leading-relaxed mb-12"
            >
              At Krewstar, we don’t just create, we deliver results. Our expertise lies in crafting commercials and creative campaigns that don’t just look great but drive business growth, build brand equity, and spark conversations.
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              <a 
                href="mailto:contact@krewstar.com" 
                className="inline-block px-10 py-4 bg-white text-black rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[#d58e42] transition-colors"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2: Our Services (Accordion) */}
        <section className="px-6 py-20 max-w-7xl mx-auto">
          <h2 className="text-sm uppercase tracking-[0.4em] font-black text-gray-500 mb-16">Our Services</h2>
          
          <div className="flex flex-col gap-6">
            {serviceData.map((service, index) => (
              <div key={index} className="w-full">
                {/* Clickable Title (Outside the box) */}
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-8 flex justify-between items-center group text-left border-t border-white/10"
                >
                  <h3 className={`text-3xl md:text-5xl font-black tracking-tighter uppercase transition-colors ${openIndex === index ? "text-[#d58e42]" : "text-white group-hover:text-gray-400"}`}>
                    {index + 1}. {service.title}
                  </h3>
                  <span className={`text-4xl transition-transform duration-500 ${openIndex === index ? "rotate-45 text-[#d58e42]" : "rotate-0 text-gray-500"}`}>
                    +
                  </span>
                </button>

                {/* Animated Content (Inside the box) */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className="bg-[#FAF9F6] text-black rounded-[40px] p-8 md:p-16 mb-10 flex flex-col md:flex-row gap-12 items-center">
                        {/* Text Content */}
                        <div className="md:w-1/2 space-y-8">
                          <p className="text-xl md:text-2xl font-bold leading-tight">
                            {service.subtitle}
                          </p>
                          <ul className="space-y-4">
                            {service.items.map((item, i) => (
                              <li key={i} className="flex items-center gap-4 text-gray-600 font-medium">
                                <span className="w-1.5 h-1.5 bg-black rounded-full" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Video Content */}
                        <div className="md:w-1/2 w-full aspect-video rounded-3xl overflow-hidden shadow-xl border border-black/5">
                          <video 
                            autoPlay muted loop playsInline 
                            className="w-full h-full object-cover"
                          >
                            <source src={service.video} type="video/mp4" />
                          </video>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <div className="border-t border-white/10" />
          </div>
        </section>

        {/* SECTION 3: Talk to Us */}
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

export default Services;