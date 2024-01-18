import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Footer from "./components/Footer";
import Tours from "./components/Tours";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Tours />
      <About />
      <Footer />
    </>
  );
}

export default App;
