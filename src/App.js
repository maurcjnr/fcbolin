import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";
import { Analytics } from "@vercel/analytics/react";

//Icons
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

// CSS
import "./Styles/Navbar.css";

// Navbar
import Home from "./Pages/Home";
import About from "./Pages/About";
import Staff from "./Pages/Staff";
import ErrorPage from "./Pages/ErrorPage";

// Footer
import Footer from "./Pages/Footer";

// Dark Mode
export const ThemeContext = createContext("light");

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr == "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App" id={theme}>
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
            <div className="navbar__icon">
              {theme == "light" ? <BsFillSunFill /> : <BsFillMoonFill />}
            </div>
            <div className="navbar__dark-mode">
              <ReactSwitch
                onChange={toggleTheme}
                checked={theme == "dark"}
                offColor="#485166"
                onColor="#fb9cb2"
                uncheckedIcon={false}
                checkedIcon={false}
              />
            </div>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/equipe" element={<Staff />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>

          <Footer />
        </Router>

        <Analytics />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
