import About from "../components/About";
import ClinTech from "../components/ClinTech";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="bg-slate-900/90 text-white p-6">
      <Navbar />
      <ClinTech />
      <About />
    </div>
  );
};

export default Home;
