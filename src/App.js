import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import SocialFollow from "./components/SocialFollow";
import Navigation from "./components/Navigation";
import Portfolio from "./components/Portfolio";
// import Project from "./components/Project";
// import Resume from "./components/Resume";

import "./App.css";

function App() {
  return (
    <div>
      <Navigation />
      <main>
        <About />
        <Portfolio />
        <Contact />
      </main>
      <footer>
        <SocialFollow />
        Patricia Cancio 2022
      </footer>
    </div>
  );
}

export default App;
