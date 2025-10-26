import {React, useState,useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header'
import { ThemeContext } from "../Context/ThemeContext";
import Footer from '../Components/Footer';



const MainLayout = ({theme,setTheme,gameListByGenreId}) => {

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
                  <Header />

        <div className=" w-[80%] m-auto">
        <Outlet/>

        </div>
           <Footer/>

      </div>

    </ThemeContext.Provider>
  ); 
}

export default MainLayout