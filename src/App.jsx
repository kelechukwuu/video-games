import React, { useEffect, useState } from "react";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import { ThemeContext } from "./Context/ThemeContext";
import GlobalApi from "./Services/GlobalApi";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [gameListByGenreId, setGameListByGenreId] = useState();
  
  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "dark");
    getGameListByGenreId(4);

  }, []);

  
const getGameListByGenreId = (id) => {
    GlobalApi.getGamesListByGenreId(id)
    .then((resp) => {
      setGameListByGenreId(resp.data.results);

    })
    .catch((error)=> console.log(error))
  }


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
            url(${gameListByGenreId?.length > 0 ?gameListByGenreId[2].background_image : null})
          `,
              }
            : {
                backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)),            
                url(${gameListByGenreId?.length > 0 ?gameListByGenreId[2].background_image : null})`,
              }
        }
      >
        <div className=" w-[80%] m-auto">
          <Header />
          <Home GlobalApi={GlobalApi} gameListByGenreId={gameListByGenreId} setGameListByGenreId={setGameListByGenreId} getGameListByGenreId={getGameListByGenreId}/>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
