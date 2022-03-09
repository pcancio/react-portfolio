import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import SocialFollow from "./components/SocialFollow";

// import Nav from "./components/Nav";
import "./App.css";

function App() {
  return (
    <div>
      <main>
        <About></About>
        <Contact></Contact>
      </main>
      <SocialFollow />
    </div>
  );
}

export default App;
