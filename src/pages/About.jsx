import PageTransition from "../components/PageTransition";

const About = () => {
  return (
    <PageTransition>
      <div className="pt-40 px-6 max-w-6xl mx-auto min-h-screen">
        <h1 className="text-5xl font-bold mb-8">About Us</h1>
        <div className="w-full aspect-video bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center text-gray-500">
           Video Placeholder for About Page
        </div>
      </div>
    </PageTransition>
  );
};

export default About;