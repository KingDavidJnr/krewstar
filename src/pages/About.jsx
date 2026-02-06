import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";

const About = () => {
  return (
    <PageTransition>
      <main className="w-full overflow-hidden bg-black text-white">
        
        {/* SECTION 1: Creative that Converts (Black BG) */}
        <section className="pt-48 pb-32 px-6 bg-black">
          <div className="max-w-7xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-12 uppercase"
            >
              Creative that Converts, <br />
              <span className="text-gray-500">Campaigns that Deliver</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-3xl text-gray-400 max-w-4xl leading-snug"
            >
              Krewstar Studios is a production partner and creative agency specializing in video production, animation, innovative design, brand strategy, research, and product design.
            </motion.p>
          </div>
        </section>

        {/* SECTION 2: About Us Manifesto (White BG) */}
        <section className="bg-white text-black py-32 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="sticky top-40"
            >
              <h2 className="text-sm uppercase tracking-[0.4em] font-black text-gray-400 mb-6">About Us</h2>
              <p className="text-4xl md:text-6xl font-black tracking-tighter leading-none uppercase">
                Our <br /> Manifesto
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <p className="text-xl md:text-2xl leading-relaxed text-gray-700">
                Our manifesto is to create with purpose, delivering commercials, campaigns, products, and brand storytelling that not only look great but also drive real business results.
              </p>
              <p className="text-xl md:text-2xl leading-relaxed text-gray-700 font-bold">
                At Krewstar, creativity and strategy work together.
              </p>
              <p className="text-xl md:text-2xl leading-relaxed text-gray-700">
                That’s why every project we take on is rooted in insight, guided by data, and designed to deliver measurable impact, brand awareness, customer engagement, or direct conversions.
              </p>

              <div className="pt-10">
                <a 
                  href="mailto:contact@krewstar.com" 
                  className="inline-block px-10 py-4 bg-black text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[#d58e42] transition-colors"
                >
                  Become a Krewstar Client
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 3: Our Team (White BG) */}
        <section className="bg-white text-black py-32 px-6 border-t border-gray-100">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
            <div className="md:w-1/3">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">Our Team</h2>
            </div>
            <div className="md:w-2/3">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-xl md:text-3xl text-gray-500 leading-relaxed italic"
              >
                Our team is made up of storytellers, designers, strategists and digital experts who understand that great creativity is only as good as the results it delivers. From concept to execution, we ensure that every ad, every campaign, and every piece of content moves the needle for your business.
              </motion.p>
            </div>
          </div>
        </section>

        {/* SECTION 4: Full-Width Image (No BG) */}
        <section className="w-full h-auto overflow-hidden">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://res.cloudinary.com/dvbqxhkh6/image/upload/v1770341789/about-us_image_krewstar_roac34.png" 
            alt="Krewstar Studio" 
            className="w-full h-full object-cover"
          />
        </section>

        {/* SECTION 5: Talk to Us (Giant Text) */}
        <section className="py-60 px-6 flex justify-center items-center bg-black">
          <a 
            href="mailto:contact@krewstar.com" 
            className="text-[16vw] font-black tracking-tighter leading-none uppercase transition-all duration-500 hover:text-[#d58e42] hover:italic text-white"
          >
            TALK TO US
          </a>
        </section>

      </main>
    </PageTransition>
  );
};

export default About;