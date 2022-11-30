//Imported
import { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ReactSwitch from "react-switch";
import { Analytics } from "@vercel/analytics/react";

//Imported Icons
import { BsFillSunFill, BsFillMoonFill, BsList, BsX } from "react-icons/bs";

//CSS
import "./Styles/Navbar.css";

//Imported Images
import FCBolinIconLight from "./Images/fcbolin-light.png";
import FCBolinIconDark from "./Images/fcbolin-dark.png";

//Imported Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Staff from "./Pages/Staff";
import ErrorPage from "./Pages/ErrorPage";

//Footer
import Footer from "./Components/Footer";

//Dark Mode
export const ThemeContext = createContext("light");

function App() {
  //Dark Mode
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr == "light" ? "dark" : "light"));
  };

  //Responsive Navbar
  const [showLinks, setShowLinks] = useState(false);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App" id={theme}>
        <Router>
          <nav className="navbar">
            <div className="left-side">
              <img
                src={theme == "light" ? FCBolinIconDark : FCBolinIconLight}
                alt="FC Bolin Icon"
              />
            </div>
            <div className="right-side">
              <nav className="navbar__links" id={showLinks ? "hidden" : ""}>
                <Link to="/">Início</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/equipe">Equipe</Link>
                <a href="https://discord.gg/WbPGYFHW7X" target="_blank">
                  Discord
                </a>
              </nav>

              <a
                className="right-side__responsive-button"
                onClick={() => setShowLinks(!showLinks)}
              >
                {showLinks == false ? <BsList /> : <BsX />}{" "}
              </a>

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
