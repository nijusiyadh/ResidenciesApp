import "./App.css";
import Companies from "./Components/Companies/Companies";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import GetStarted from "./Components/GetStarted/GetStarted";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Residencies from "./Components/Residencies/Residencies";
import Value from "./Components/Values/Value";

function App() {
  return (
    <div className="">
      <div className="relative bg-Black">
        <div className="absolute rounded-full w-[300px] h-[300px] blur-3xl left-6 top-6 bg-white/30" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
