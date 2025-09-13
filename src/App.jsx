import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import "./app.css";
import Landingpage from "./pages/Landingpage";
import Header from "./Components/Header";
import About from "./pages/About";
import SplashCursor from "./Components/SplashCursor";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Apply theme to document root
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle function to pass down
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Router>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <SplashCursor />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/landingpage" element={<Landingpage />} />
      </Routes>
    </Router>
  );
}

export default App;
