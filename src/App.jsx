import React, { useEffect, useState } from "react";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import { ThemeContext } from "./Context/ThemeContext";

const App = () => {
  const [theme, setTheme] = useState("dark");
  console.log(theme);
  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "dark");
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={`${theme} ${
          theme === "dark"
            ? "bg-[#121212] min-h-screen bg-cover bg-center h-full w-full"
            : "bg-cover bg-center h-full w-full"
        }`}
        style={
          theme === "dark"
            ? {
                backgroundImage: `
            linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
            url(/images/backgound-image.0d99efb296d85a4832e1.jpg)
          `,
              }
            : {
                backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)),            
                url(/images/backgound-image.0d99efb296d85a4832e1.jpg)`,
              }
        }
      >
        <div className=" w-[80%] m-auto">
          <Header />
          <Home />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
