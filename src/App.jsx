import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Colors } from "./components";
import { About, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Contact from "./components/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Colors>
      <StarsCanvas />
        <div className="relative z-0.1 bg-primary">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Works />
        <Tech />
        <div className="relative z-0">
          <Contact />
        </div>
      </Colors>
    </BrowserRouter>
  );
};

export default App;


