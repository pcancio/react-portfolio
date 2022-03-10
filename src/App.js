import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Resume from "./components/Resume";

import "./App.css";

function App() {
  return (
    <div>
      <Navigation />
      <main>
        <About />
        <Portfolio />
        <Resume />
        <Contact />
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
