import PageTransition from "../components/PageTransition";

const Home = () => {
  return (
    <PageTransition>
      <main className="pt-40 px-6 min-h-screen max-w-7xl mx-auto">
        <section className="text-center space-y-8">
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-none">
            KREWSTAR <span className="text-gray-500">2026</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-xl mx-auto">
            The elite talent partner for the world's most ambitious companies.
          </p>
          
          {/* Main Video Placeholder */}
          <div className="w-full aspect-video bg-white/5 border border-white/10 rounded-3xl mt-20 flex items-center justify-center overflow-hidden">
             <p className="text-gray-600">Video Placeholder (Home)</p>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default Home;