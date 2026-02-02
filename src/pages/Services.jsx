import PageTransition from "../components/PageTransition";

const Services = () => {
  return (
    <PageTransition>
      <div className="pt-40 px-6 max-w-6xl mx-auto min-h-screen">
        <h1 className="text-5xl font-bold mb-12 uppercase tracking-tighter">What we do</h1>
        <div className="border-t border-white/10 divide-y divide-white/10">
          {["Talent Acquisition", "Product Design", "Engineering"].map((service) => (
            <div key={service} className="py-12 flex justify-between items-center group cursor-pointer">
              <h2 className="text-3xl group-hover:pl-4 transition-all">{service}</h2>
              <span className="text-gray-500">→</span>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default Services;