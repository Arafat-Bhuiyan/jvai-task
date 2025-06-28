import About from "../components/About";
import Benefits from "../components/Benefits";
import CaseUse from "../components/CaseUse";
import ClinTech from "../components/ClinTech";
import Feature from "../components/Feature";
import GetStarted from "../components/GetStarted";
import InAction from "../components/InAction";
import Technology from "../components/Technology";

const Home = () => {
  return (
    <div className="bg-slate-900/90 text-white p-6">
      <ClinTech />
      <About />
      <Feature />
      <InAction />
      <Technology />
      <Benefits />
      <CaseUse />
      <GetStarted />
      
    </div>
  );
};

export default Home;
