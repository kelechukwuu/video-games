import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { HiOutlineSearch } from "react-icons/hi";
import { HiMoon } from "react-icons/hi";
import { HiOutlineSun } from "react-icons/hi";
import { ThemeContext } from "../Context/ThemeContext";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const {theme, setTheme}=useContext(ThemeContext)

    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // adjust this threshold
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className= {`flex items-center p-3 gap-2 sticky top-0 w-[full] z-50 transition-colors duration-300 ${
          scrolled ? "bg-gray-900 shadow-lg rounded-b-lg" : {}
        }`}>
            
      <Link to="/"><img src={logo} width={60} /></Link>
      <div className="flex bg-slate-200 p-2 w-full rounded-full items-center mx-5 gap-2">
        <HiOutlineSearch />
        <input placeholder="Search Games" className="w-[100%] outline-none" />
      </div>
      <div class="flex items-center md:w-[30%] sm:w-[50%]">
            <Link to="login" class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Login</Link>
            <Link to="register" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign up</Link>
            
        </div>
      
      <div>
        {theme == 'dark' ? (
          <HiMoon
            className=" text-[35px] bg-slate-200 rounded-full cursor-pointer"
            onClick={() => {setTheme('light'); localStorage.setItem('theme','light')}}
          />
        ) : (
          <HiOutlineSun
            className=" text-[35px] bg-slate-200 rounded-full cursor-pointer"
            onClick={() => {setTheme('dark'); localStorage.setItem('theme','dark')}}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
