import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import SocialFollow from "./components/SocialFollow";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
// import Project from "./components/Project";
// import Resume from "./components/Resume";

import "./App.css";

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <Portfolio></Portfolio>
        <Contact></Contact>
      </main>
      <footer>
        <SocialFollow />
        Patricia Cancio 2022
      </footer>
    </div>
  );
}

export default App;
