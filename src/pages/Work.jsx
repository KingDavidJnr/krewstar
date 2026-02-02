import PageTransition from "../components/PageTransition";

const Work = () => {
  return (
    <PageTransition>
      <div className="pt-40 px-6 max-w-6xl mx-auto min-h-screen">
        <h1 className="text-5xl font-bold mb-12">Selected Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-square bg-white/5 rounded-2xl border border-white/10" />
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default Work;