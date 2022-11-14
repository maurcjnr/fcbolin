import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import "./Styles/Navbar.css";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Staff from "./Pages/Staff";
import ErrorPage from "./Pages/ErrorPage";

import Footer from "./Pages/Footer";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <nav className="navbar__links">
          <Link to="/">Início</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/equipe">Equipe</Link>
          <a href="https://discord.gg/WbPGYFHW7X" target="_blank">
            Discord
          </a>
        </nav>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/equipe" element={<Staff />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
      <Analytics />
    </Router>
  );
}

export default App;
