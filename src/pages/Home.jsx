import { Toaster } from "react-hot-toast";
import About from "../components/About";
import Benefits from "../components/Benefits";
import CaseUse from "../components/CaseUse";
import ClinTech from "../components/ClinTech";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import GetStarted from "../components/GetStarted";
import InAction from "../components/InAction";
import Navbar from "../components/Navbar";
import Technology from "../components/Technology";

const Home = () => {
  return (
    <div className="bg-slate-900/90 text-white p-6">
      <Toaster position="top-center" />
      <Navbar />
      <ClinTech />
      <About />
      <Feature />
      <InAction />
      <Technology />
      <Benefits />
      <CaseUse />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default Home;
