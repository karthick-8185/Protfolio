import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import "./app.css";
import Landingpage from "./pages/Landingpage";
import Header from "./Components/Header";
import About from "./pages/About";
import SplashCursor from "./Components/SplashCursor";
import Contactme from "./pages/Contactme";
import { ToastContainer } from "react-toastify";

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
    <>
    <ToastContainer
        limit={1}
        autoClose={1500}
        // transition={Bounce}
        pauseOnHover={true}
        pauseOnFocusLoss={false}
        newestOnTop
        icon={true}
        position="top-right" // ← this moves it to the top-right
        style={{
          
          minWidth: "240px",
          width: "85%",
          fontSize: "14px",
          padding: "8px",
          maxWidth: "360px", // optional: cap width on large screens
        }}
      />
    <Router>
      <Header theme={theme} toggleTheme={toggleTheme} />
      
      <Routes>
        <Route path="*" element={<Navigate to="/landingpage" replace />} />
        <Route path="/landingpage" element={<Landingpage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactme" element={<Contactme />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
