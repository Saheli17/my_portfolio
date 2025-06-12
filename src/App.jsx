
import Navbar from './components/Navbar';
//import Services from './components/Services';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import { useEffect, useState } from "react";
function App() {
  const [isDarkMode, setIsDarkMode] = useState(null); // null = not initialized

useEffect(() => {
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = localStorage.theme;
    if (theme === "dark" || (!("theme" in localStorage) && systemPrefersDark)) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode === null) return; // wait until it's set
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "";
    }
  }, [isDarkMode]);

 
  if (isDarkMode === null) return null;
  return (
    <>
     <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      {/* <Services isDarkMode={isDarkMode} /> */}
      <Work isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
 
    </>
  );
}

export default App;
