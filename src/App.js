import Intro from "./components/intro/Intro";
//import Portfolio from "./components/portolio/Portfolio";
import Topbar from "./components/topbar/Topbar";
import About from "./components/about/About";
import Contact from "./components/contact/Contact"
import Menu from "./components/menu/Menu";
import "./app.scss"
import { useState } from "react";
import Works from "./components/works/Works";


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen= {menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen= {menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        {/* <Portfolio/> */}
        <Works/>
        <About/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
