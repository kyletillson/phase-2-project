import './App.css';
import React from "react";
import NavBar from './NavBar';
import { createContext, useState } from "react"; 
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  }
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <div className="switch">
          <label className="label"> {theme === "light" ? "Light Mode " : "Dark Mode "}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme=== "dark"}/>
        </div>
        <NavBar />
      </div>
    </ThemeContext.Provider>
    
  )
  }

export default App;


